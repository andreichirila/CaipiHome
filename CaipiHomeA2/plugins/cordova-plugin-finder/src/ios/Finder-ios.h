#import <Cordova/CDV.h>

@interface Finder : CDVPlugin

- (void) init:(CDVInvokedUrlCommand*)command;
- (void) sendIdent:(CDVInvokedUrlCommand*)command;
- (void) getDeviceList:(CDVInvokedUrlCommand*)command;

@end
