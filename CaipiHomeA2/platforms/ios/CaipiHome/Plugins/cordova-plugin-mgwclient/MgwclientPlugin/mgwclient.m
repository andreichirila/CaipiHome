#import "mgwclient.h"
#import "mgw-client.h"
@import UserNotifications;

static Mgw_Client_t gMgwC;
static int havedata = 0;
static char *rdata = nil;

static dispatch_semaphore_t semaphore;
static dispatch_semaphore_t semaphore2;

int sendAck(Mgw_Client_t *MgwC, unsigned char TagId, uint16_t ASeq, uint16_t ASeq2, uint64_t dstAddr){
	char *AckBuf = NULL;
	uint64_t srcAddr = 0;

	srcAddr = MgwC_getDevMac(MgwC);

	//printf("MMV: sendAck DevMac: .%llX.\n", srcAddr);

#if __WORDSIZE == 64
	AckBuf = strCatf(NULL,"%llX|0|%lX|%hu|Ack|Ack", srcAddr, dstAddr, ASeq2);
#else
	AckBuf = strCatf(NULL,"%llX|0|%llX|%hu|Ack|Ack", srcAddr, dstAddr, ASeq2);
#endif

	printf("sendAck: .%s.\n", AckBuf);

	Mgw_Channel_sendData(MgwC, TagId, ASeq, (char*)AckBuf, strlen(AckBuf));
	FREE(AckBuf);

	return 0;
}

int procPkgRecvData(Mgw_Client_t *MgwC,  Mgw_BinData_Header_t *Header, char *Data){
	int ret = 0;
	uint16_t Seq = 0;
	uint64_t srcAddr = 0;
	char dsttyp[128];
	uint64_t Dst = 0;
	char Cmd[128];

	memset(Cmd, 0, sizeof(Cmd));

	printf("procPkgRecvData begin: .%s.\n", Data);

	StrSplit split;
	int i = 0;

	memset(&split, 0, sizeof(StrSplit));
	split.dem = '|';
	split.max = 5;
	strSplit2offsets(Data, &split);
	printf("Count: %d\n", split.count);
	ret = split.count;

#if 0
	if(split.wbuf){
		for(i=0;i<split.count;i++){
			if(split.offset[i] != 0){ printf("%d: .%s.\n", i, split.wbuf+split.offset[i]); }
		}
	}
#endif

	if(ret == 4){
		sscanf(split.wbuf, "%llX", &srcAddr);
		sscanf(split.wbuf+split.offset[0], "%s",dsttyp);
		//sscanf(split.wbuf+split.offset[1], "%llX",&Dst);
		sscanf(split.wbuf+split.offset[2], "%hu", &Seq);
		if(strcmp(split.wbuf+split.offset[3], "Ack")){ sendAck(MgwC, Header->TagId, Header->Seq, Seq, srcAddr); }
	}

	printf("procPkgRecvData end:\n");
	return 0;
}

void MsgRecvCallbackFunc2(Mgw_Client_t *MgwC, Mgw_BinData_Header_t *Header, void *Data, void *Userdata){
	printf("MMV MsgRecv2: TagId %d | %s\n", Header->TagId, ((char *)Data));

	if(havedata == 0){
		StrSplit split;
		int i = 0;
		int ret = 0;

		memset(&split, 0, sizeof(StrSplit));
		split.dem = '|';
		split.max = 5;
		strSplit2offsets(Data, &split);
		printf("Count2: %d\n", split.count);
		ret = split.count;
#if 0
		if(split.wbuf){
			for(i=0;i<split.count;i++){
				if(split.offset[i] != 0){ printf("%d: .%s.\n", i, split.wbuf+split.offset[i]); }
			}
		}
#endif
		havedata = 1;
		rdata = (char *) split.wbuf+split.offset[3];

		//procPkgRecvData(MgwC, Header, Data);

		dispatch_semaphore_signal(semaphore);
		dispatch_semaphore_wait(semaphore2, DISPATCH_TIME_FOREVER);
	}
	//printf("MMV MsgRecv2 end : TagId %d | %s\n", Header->TagId, ((char *)Data));
}

char *recvData(){
	unsigned long int slen = 0;

	dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);

	if(rdata == nil){ return nil; }

	slen = strlen(rdata) + 1;

	char *strtmp = malloc(slen*sizeof(char));
	memset(strtmp, 0, slen);
	memmove(strtmp, rdata, slen-1);

	havedata = 0;
	dispatch_semaphore_signal(semaphore2);

	return strtmp;
}

void sendNotification(NSString *Msg){
	UNMutableNotificationContent *content = [[UNMutableNotificationContent alloc] init];
	//content.title = [NSString localizedUserNotificationStringForKey:@"MMV2 said:" arguments:nil];
	//content.body = [NSString localizedUserNotificationStringForKey:@"Hello MMV2！Get up, let's play1!" arguments:nil];
	//NSString *complete = [NSString stringWithFormat:@"%@%@", sample1, //sample2];
	content.body = Msg;
	content.sound = [UNNotificationSound defaultSound];

	content.badge = @([[UIApplication sharedApplication] applicationIconBadgeNumber] + 1);

	UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:1 repeats:false];
	UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:@"OneSecond" content:content trigger:trigger];

	UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
	[center addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
		if (!error) { NSLog(@"add NotificationRequest succeeded!"); }
	}];
}

@implementation Mgwclient

- (NSString *)getUUID
{
	NSString *UUID = [[NSUserDefaults standardUserDefaults] objectForKey:@"uniqueID"];
	if (!UUID) {
		CFUUIDRef theUUID = CFUUIDCreate(NULL);
		CFStringRef string = CFUUIDCreateString(NULL, theUUID);
		CFRelease(theUUID);
		UUID = [(__bridge NSString*)string stringByReplacingOccurrencesOfString:@"-"withString:@""];
		[[NSUserDefaults standardUserDefaults] setValue:UUID forKey:@"uniqueID"];
	}
	return UUID;
}

- (void) donotification:(CDVInvokedUrlCommand *)command
{
	NSString *data = [command argumentAtIndex:0];
	sendNotification(data);
}

- (void) init:(CDVInvokedUrlCommand *)command
{
	NSString *like_UDID=nil;
	char *ident = nil;

	SSeq = 1;

	semaphore = dispatch_semaphore_create(0);
	semaphore2 = dispatch_semaphore_create(0);

	NSLog(@"Init Mgw:");

	UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
	[center requestAuthorizationWithOptions:(UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert)
		completionHandler:^(BOOL granted, NSError * _Nullable error) {
			if (!error) { NSLog(@"request authorization succeeded!"); }
	}];

	CDVPluginResult* pluginResult = nil;
	int ret = 0;

	ret = mgwtest3(&gMgwC, &MsgRecvCallbackFunc2);
	if(ret < 0){
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	}else{
		like_UDID=[NSString stringWithFormat:@"%@", self.getUUID];
		ident = (char *)[like_UDID UTF8String];
		NSLog(@"MMV IDENT: %@",like_UDID);
		MgwC_setUniIdent(&gMgwC, ident);
		//[like_UDID release];

		NSString *data = [NSString stringWithFormat:@"OK"];
		if (data != nil && [data length] > 0) {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
		}else{
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		}
	}

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void) init2:(CDVInvokedUrlCommand *)command
{
	NSLog(@"Init2 Mgw:");

	CDVPluginResult* pluginResult = nil;
	int ret = 0;

	ret = mgwtest4(&gMgwC, &MsgRecvCallbackFunc2);
	if(ret < 0){
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	}else{
		NSString *data = [NSString stringWithFormat:@"OK"];
		if (data != nil && [data length] > 0) {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
		}else{
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		}
	}

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void) login:(CDVInvokedUrlCommand *)command
{
	NSString *like_UDID=nil;
	char *ident = nil;

	NSString *username = [command argumentAtIndex:0];
	NSString *password = [command argumentAtIndex:1];

	char *cusername = (char *)[username UTF8String];
	char *cpassword = (char *)[password UTF8String];

	NSLog(@"Init Mgw login: %@ | %@", username, password);

	CDVPluginResult* pluginResult = nil;
	int ret = 0;

	ret = mgwtest2(&gMgwC, cusername, cpassword);
	if(ret < 0){
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	}else{
		NSString *data = [NSString stringWithFormat:@"OK"];
		if (data != nil && [data length] > 0) {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
		}else{
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		}
	}

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void) senddata:(CDVInvokedUrlCommand *)command
{
	[self.commandDelegate runInBackground:^{
		NSString *data = [command argumentAtIndex:0];
		unsigned char TagId = 0;
		NSString *head = [NSString stringWithFormat:@"0|2|0|%hu|Data|", SSeq];
		NSString *sdata = [NSString stringWithFormat:@"%@%@", head,  data];
	
		char *cdata = (char *)[sdata UTF8String];

		printf("MMV CT: %d\n", MGW_CHANNEL_TAG_TYP_MSG);
		printf("senddata: %s\n", cdata);

		MgwC_Target_set(&gMgwC, MGW_TARGET_TYPE_CENTRAL, 0);
		TagId = MgwC_Channel_TagId_create(&gMgwC, MGW_CHANNEL_TAG_TYP_MSG, NULL);
		if(TagId){
			Mgw_Channel_sendData(&gMgwC, TagId, SSeq++, cdata, strlen(cdata));
			MgwC_Channel_TagId_remove(&gMgwC, TagId);
		}
	}];
}

- (void) waitofdata:(CDVInvokedUrlCommand *)command
{
	[self.commandDelegate runInBackground:^{
		CDVPluginResult* pluginResult = nil;
		NSLog(@"MMV WaitofData");

		char *strtmp = recvData();

		if(strtmp == nil){
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		}else{
			NSString *data = [NSString stringWithCString:strtmp encoding:NSUTF8StringEncoding];
			if (data != nil && [data length] > 0) {
				pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
			}else{
				pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
			}

			if(strtmp){ free(strtmp); }
		}

		[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
	}];
}

- (void) reconnect:(CDVInvokedUrlCommand *)command
{
	NSString *like_UDID=nil;
	char *ident = nil;

	CDVPluginResult* pluginResult = nil;
	int ret = 0;

	ret = Mgw_reconnect(&gMgwC);
	if(ret < 0){
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	}else{
		NSString *data = [NSString stringWithFormat:@"OK"];
		if (data != nil && [data length] > 0) {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
		}else{
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		}
	}

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void) setlocalcentralip:(CDVInvokedUrlCommand *)command
{
	NSLog(@"Mgw setLocalCentralIp1:");

	NSString *localcentralip = [command argumentAtIndex:0];

	char *clocalcentralip= (char *)[localcentralip UTF8String];

	NSLog(@"Mgw setLocalCentralIp: %@", localcentralip);

	CDVPluginResult* pluginResult = nil;
	int ret = 0;

	ret = MgwC_setlocalcentralip(&gMgwC, clocalcentralip);
	if(ret < 0){
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	}else{
		NSString *data = [NSString stringWithFormat:@"OK"];
		if (data != nil && [data length] > 0) {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
		}else{
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		}
	}

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
