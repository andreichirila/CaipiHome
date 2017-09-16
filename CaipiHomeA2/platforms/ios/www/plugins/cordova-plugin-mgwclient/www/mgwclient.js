cordova.define("cordova-plugin-mgwclient.Mgwclient", function(require, exports, module) {
var mgwclient = function() {
	var authstate = 0;

        this.donotification = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback, errorCallback, 'Mgwclient', 'donotification', []);
        };

        this.init = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback,  errorCallback, 'Mgwclient', 'init', data);
        };

        this.init2 = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback,  errorCallback, 'Mgwclient', 'init2', data);
        };

	this.getauthstate = function(){
		return authstate;
	};

        this.login = function(data, successCallback, errorCallback) {
		authstate = 0;
    		//cordova.exec(successCallback,  errorCallback, 'Mgwclient', 'login', data);
    		cordova.exec(function(res) { authstate = 1; },  function(res) { authstate = 2; }, 'Mgwclient', 'login', data);
        };

        this.senddata = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback,  errorCallback, 'Mgwclient', 'senddata', data);
        };

        this.waitofdata = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback,  errorCallback, 'Mgwclient', 'waitofdata', data);
        };

        this.setLocalCentralIp = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback,  errorCallback, 'Mgwclient', 'setlocalcentralip', data);
        };
        
        this.reconnect = function(data, successCallback, errorCallback) {
    		cordova.exec(successCallback, errorCallback, 'Mgwclient', 'reconnect', []);
        };
        

        this.checkNetState = function(data, successCallback, errorCallback) {
        	window.addEventListener("online", function(){ alert("Mgw Online"); },false);
        	//window.addEventListener("online", function() { cordova.plugins.mgwclient.reconnect() },false);
        	//window.addEventListener("offline", function() { },false);
        };
};

module.exports = mgwclient;




/*global cordova, module*/

/*
exports.donotification = function (data, scallback, fcallback) {
    cordova.exec(scallback, fcallback, 'Mgwclient', 'donotification', []);
};

exports.init = function (data, scallback, fcallback) {
	alert("MMV MGW init");
    cordova.exec(scallback, fcallback, 'Mgwclient', 'init', data);
};

exports.init2 = function (data, scallback, fcallback) {
    cordova.exec(scallback, fcallback, 'Mgwclient', 'init2', data);
};

exports.login = function (data, scallback, fcallback) {
    cordova.exec(scallback, fcallback, 'Mgwclient', 'login', data);
};

exports.senddata = function (data, scallback, fcallback) {
    cordova.exec(scallback, fcallback, 'Mgwclient', 'senddata', data);
};

exports.waitofdata = function (scallback, fcallback) {
    cordova.exec(scallback, fcallback, 'Mgwclient', 'waitofdata', []);
};

exports.reconnect = function (scallback, fcallback) {
    cordova.exec(scallback, fcallback, 'Mgwclient', 'reconnect', []);
};

exports.checkNetState = function (data, scallback, fcallback) {
        window.addEventListener("online", function() { cordova.plugins.mgwclient.reconnect() },false);
        window.addEventListener("offline", function() { },false);
};
*/

});
