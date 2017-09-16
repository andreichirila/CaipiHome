package com.plugin;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.Activity;
import android.os.Bundle;

public class Finder extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

	if (action.equals("init")) {
            FinderJni.init();
            callbackContext.success("ok");
            return true;
	} else if (action.equals("sendIdent")) {
            FinderJni.sendIdent();
            callbackContext.success("ok");
            return true;
	} else if (action.equals("getDeviceList")) {

            String jniString = FinderJni.getDeviceList();
            callbackContext.success(jniString);

            return true;

        } else {
            return false;
        }

    }
}
