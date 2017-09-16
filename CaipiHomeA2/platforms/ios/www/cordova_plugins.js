cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "id": "cordova-plugin-badge.Badge",
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "plugin.notification.badge",
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-finder.finder",
        "file": "plugins/cordova-plugin-finder/www/finder.js",
        "pluginId": "cordova-plugin-finder",
        "clobbers": [
            "finder"
        ]
    },
    {
        "id": "cordova-plugin-mgwclient.Mgwclient",
        "file": "plugins/cordova-plugin-mgwclient/www/mgwclient.js",
        "pluginId": "cordova-plugin-mgwclient",
        "clobbers": [
            "cordova.plugins.mgwclient",
            "plugin.mgwclient",
            "mgwclient"
        ]
    },
    {
        "id": "cordova-plugin-netstate.netstate",
        "file": "plugins/cordova-plugin-netstate/www/netstate.js",
        "pluginId": "cordova-plugin-netstate",
        "clobbers": [
            "netstate"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-app-event": "1.2.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-background-mode": "0.6.6-dev",
    "cordova-plugin-badge": "0.7.4",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-finder": "0.0.1",
    "cordova-plugin-mgwclient": "0.0.1",
    "cordova-plugin-netstate": "0.0.1",
    "cordova-plugin-network-information": "1.3.1",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});