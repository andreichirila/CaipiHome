#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>
#import <Cordova/CDVPlugin.h>

@interface Mgwclient : CDVPlugin {
	unsigned short SSeq;
}


@property (nonatomic, copy) NSString* callbackId;

- (void) donotification:(CDVInvokedUrlCommand *)command;
- (void) init:(CDVInvokedUrlCommand *)command;
- (void) init2:(CDVInvokedUrlCommand *)command;
- (void) login:(CDVInvokedUrlCommand *)command;
- (void) senddata:(CDVInvokedUrlCommand *)command;
- (void) waitofdata:(CDVInvokedUrlCommand *)command;
- (void) reconnect:(CDVInvokedUrlCommand *)command;
- (void) setremotemode:(CDVInvokedUrlCommand *)command;
- (void) setlocalcentralip:(CDVInvokedUrlCommand *)command;

@end
