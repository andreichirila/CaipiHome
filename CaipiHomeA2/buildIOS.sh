#!/bin/bash

echo "Cameronet IOS/CORDOVA Optimisation build script"
echo "==============================================="

echo "--> Cordova will build the IOS Project"
cordova build ios

echo "--> The project will be transferred to the Mac Virtual Machine"
rsync -aHx -P ./ devel@192.168.7.141:~/DEVEL/CaipiHome/.

echo "--> finished"
