#import "Finder-ios.h"
#include "finder.h"
@implementation Finder 

- (void)init:(CDVInvokedUrlCommand*)command
{
    NSString* msg = [NSString stringWithFormat: @"MMV init: OK"];

    finder_init();

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)sendIdent:(CDVInvokedUrlCommand*)command
{
    NSString* msg = [NSString stringWithFormat: @"MMV sendIdent: OK"];
    
    finder_sendIdent();

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)getDeviceList:(CDVInvokedUrlCommand*)command
{
    NSString* msg = NULL;
    char *str = NULL;

    str = finder_getDeviceList();
    if(str){
    	msg = [NSString stringWithFormat: @"%s", str];
    	free(str);
    }else{
    	msg = [NSString stringWithFormat: @"[\"http://localhost:5555\"]"];
    }


    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

/*
- (void)getCurrUrl:(CDVInvokedUrlCommand*)command
{
    NSString* msg = NULL;
    char *str = NULL;

    str = finder_getCurrUrl();
    if(str){
    	msg = [NSString stringWithFormat: @"%s", str];
    	free(str);
    }else{
    	msg = [NSString stringWithFormat: @"[\"http://localhost:5555\"]"];
    }


    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void) setCurrUrl:(CDVInvokedUrlCommand *)command
{
	NSString *like_UDID=nil;
	char *ident = nil;

	NSString *url = [command argumentAtIndex:0];

	char *curl = (char *)[username UTF8String];

	CDVPluginResult* pluginResult = nil;
	int ret = 0;

	ret = finder_setCurrUrl(curl);
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
*/
@end

