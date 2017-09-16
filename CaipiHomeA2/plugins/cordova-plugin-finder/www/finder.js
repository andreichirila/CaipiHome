var finder = function() {
	var devlist = null;
	var currurl = null;

	this.onBgModeActivated = function() {
		console.warn("finder on Mode Activated");
	};

	this.onBgModeDeactivated = function() {
		console.warn("finder on Mode Deactivated");
	};

  this.init = function(successCallback, errorCallback) {
    cordova.plugins.backgroundMode.enable();
    cordova.plugins.backgroundMode.setDefaults({ color: 'F26A33' });
    cordova.plugins.backgroundMode.ondeactivate = this.onBgModeDeactivated;
    cordova.plugins.backgroundMode.onactivate = this.onBgModeActivated;

		//cordova.plugins.notification.badge.registerPermission(plugin.enable, plugin);
    cordova.exec(successCallback, errorCallback, "Finder", "init", null);

  };

	this._getDeviceList = function() {
		this._getDeviceList2(function(res){

      console.warn(res);
		  devlist = res;

		}, function(err){
		  console.error(err); });
    };

	this._getDeviceList2 = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Finder", "getDeviceList", null);
  };

  this.sendIdent = function(successCallback, errorCallback) {
    devlist = null;
    cordova.exec(successCallback, errorCallback, "Finder", "sendIdent", null);
  };

  this.getDeviceList = function(){
    return devlist;
  };

	this.setCentralMac = function(devmac){
    window.localStorage.setItem("centralmac", devmac);
	};

	this.getCentralMac = function(){
    return window.localStorage.getItem("centralmac");
	};

	this.removeCentralMac = function(){
		return window.localStorage.removeItem("centralmac");
	};

	this.setNetStateChangeFunc = function(onOnline, onOffline){
		if(onOnline){ window.addEventListener("online",  onOnline, false); }
		if(onOffline){ window.addEventListener("offline", onOffline, false); }

	};

	this.unsetNetStateChangeFunc = function(onOnline, onOffline){
		if(onOnline){ window.removeEventListener("online",  onOnline, false); }
		if(onOffline){ window.removeEventListener("offline", onOffline, false); }

	};

	this.setCurrUrl = function(currUrl){
    this.currurl = currUrl;
	};

	this.getCurrUrl = function(){
    return this.currurl;
	};

};

module.exports = finder;

/*
module.exports = {
    MAC: null,
    data: null,
    currUrl: null,
    initFinder: function (successCallback, errorCallback) {
	alert("MMV findeer 1");
        //alert(document.getElementById("finder_message"));
        //return;
        var localMac = window.localStorage.getItem("LocalMAC");
        //alert("local mac at the beginning is "+localMac);

        if( localMac !== null ) {
            //finder.writeMessage("We have found an MAC-Address on your device");
            finder.MAC = localMac;
        }else{
            //finder.writeMessage("We have not found a MAC-Address on your device");
            window.localStorage.setItem("LocalMAC","empty");
        }

        this.verifyStorageState();
        this.init(
            function(){

                //finder.writeMessage("The credentials will be sended to the Server");
                //finder.networkState();
                finder.sendIdent();

                setTimeout(function(){
                    finder.getDeviceList(
                        function(res){
                            //finder.writeMessage("We are taking the device list");
                            finder.parseObjects(res);
                        },
                        function(err){
                            alert(err);
                        }
                    );
                },200);

            },function(){
                alert("in error");
            }
        );
    },
    init: function (successCallback, errorCallback) {
	alert("Finder Init");
        cordova.exec(successCallback, errorCallback, "Finder", "init", null);
    },
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Finder", "greet", [name]);
    },
    sendIdent: function (successCallback, errorCallback) {
        //alert("in send ident");
        cordova.exec(successCallback, errorCallback, "Finder", "sendIdent", null);
    },
    getDeviceList: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Finder", "getDeviceList", null);
    },
    networkState: function(){
        var state = false;

        window.removeEventListener("online");
        window.addEventListener("online", function() {
            finder.sendIdent();

            setTimeout(function(){
                finder.getDeviceList(
                    function(res){
                        state = true;
                        finder.parseObjects(res);
                    },
                    function(err){
                        state = false;
                        alert(err);
                    }
                );
            },200);
            //alert("Finder: went online");

        },false);

        window.removeEventListener("offline");
        window.addEventListener("offline", function() {
            //alert("Finder: went offline");
        },false);

        return state;
    },
    parseObjects: function(res){
        //finder.writeMessage("The data with device list will be verified");

        var json = JSON.parse(res),
            i = 0,visible = "";

        if(json.length > 0){
            for(i; i < json.length; i++){
                var elem = json[i],
                    mac = elem.smac;

                    if(mac == this.MAC) {
                        //finder.writeMessage("The IP-Address is: "elem.ip);
                        finder.currUrl = elem.ip;
                        window.localStorage.setItem("finderUrl","http://"+elem.ip);
                    }else{
                        //finder.writeMessage("We cannot find an IP-Address, port 5555 will be opened");
                        window.localStorage.setItem("finderUrl","http://localhost:5555");
                    }
            }
        }else{
            //finder.writeMessage("We cannot find an IP-Address, port 5555 will be opened");
            window.localStorage.setItem("finderUrl","http://localhost:5555");
        }

        //finder.writeMessage("The list was already parsed");
    },
    verifyStorageState: function(){
        var Storage = window.localStorage,
            status  = false;

        if( typeof(Storage) !== "undefined" ){
            //alert("storage is on this device ACTIVE");
            status = true;
            //Storage.getItem("MAC");
        }else{
            //alert("storage is on this device INACTIVE");
            status = false;
        }

        return status;
    },
    listDevices: function(){
        var success = function (message) {
            //alert("SUCCESS function login in finder.init() -> "+message);
            //alert(message);
        };

        var failure = function (err) {
            console.warn("Error calling FINDER !!!" + err);
            //alert(err);
        };
    }
};
*/
