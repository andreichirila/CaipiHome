webpackJsonp([0,4],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary green segment\" (press)=\"press(btnInfo)\" #ref>\n\t<div class=\"ui grid mat-app-background white-back\">\n\n\t\t<div class=\"three wide column\">{{ nameBtn }}</div>\n\n\t\t<div class=\"ten wide column\"></div>\n\n\t\t<div class=\"three wide column\">\n\t\t\t<!--div caipiSimplebtn class=\"ui toggle checkbox\" #ref\n\t\t\t\t[infoBtn]=\"btnInfo\">\n\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t<label></label>\n\t\t\t</div-->\n\t\t\t<!--button class=\"circular ui icon button\">\n\t\t\t  <i class=\"icon settings\"></i>\n\t\t\t</button-->\n\t\t\t<md-slide-toggle caipiSimplebtn [infoBtn]=\"btnInfo\" [checked]=\"checked\" (change)=\"prepareJSON\" #ref></md-slide-toggle>\n\t\t</div>\n\t</div>\n\t<div class=\"ui dimmer\">\n    <div class=\"content\">\n      <div class=\"center\">\n        <h2 class=\"ui inverted icon header\">\n          <i class=\"heart icon\"></i>\n          Dimmed Message!\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary green segment\">\n\t<div class=\"ui grid white-back\">\n\t\n\t\t<div class=\"four wide column\">\n\t\t\t\t{{ nameSlider }}\n\t\t</div>\n\n\t\t<div class=\"nine wide column no-padding\">\n\t\t\t<md-slider  min=\"1\" max=\"100\"\n\t\t\t\t[value]='value'\n\t\t\t\t[step]='10'\n\t\t\t\t[thumb-label]='value'\n\t\t\t\t(input)='onSliderChange(ref.value,sliderInfo)' #ref></md-slider>\n\t\t\t<!--md-slider caipiSliderBtn class=\"md-slider\" type=\"range\" step=\"10\" min=\"0\" max=\"100\" (change)='onSliderChange'></md-slider-->\n\t\t\t<!--div caipiSliderBtn id=\"caipiSlider\" class=\"ui green range\" [infoSlider]=\"sliderInfo\" (change)=\"onSliderChange\"></div-->\n\t\t\t<!--input type=\"range\" caipiSliderBtn [infoSlider]=\"sliderInfo\" (input)='onSliderChange' /-->\n\t\t\t<!--div caipiSliderBtn class=\"ui range\" id=\"my-range\"></div-->\n\t\t</div>\n\n\t\t<div class=\"three wide column\">\n\t\t\t<md-slide-toggle caipiSimplebtn [infoBtn]='sliderInfo' [checked]=\"checked\"></md-slide-toggle>\n\t\t\t<!--div class=\"ui toggle checkbox\">\n\t\t\t  <input type=\"checkbox\" name=\"public\">\n\t\t\t  <label></label>\n\t\t\t</div-->\n\t\t</div>\n\t</div>\n</div>\n\n<!--[infoSlider]='sliderInfo' [val]='ref.value' -->"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary green segment\">\n\t<div class=\"ui grid white-back\">\n\t\n\t\t<div class=\"six wide column\">\n\t\t\t\t{{ nameText }}\n\t\t</div>\n\n\t\t<div class=\"ten wide column no-padding\">\n\t\t\t\t{{ message }}\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(621);


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_caipi_home_pages_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_caipi_home_elems_service__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(_caipiHomeService, _caipiHomeElemsP, storage, router) {
        this._caipiHomeService = _caipiHomeService;
        this._caipiHomeElemsP = _caipiHomeElemsP;
        this.storage = storage;
        this.router = router;
        this.mode = 'Observable';
        this.init = 'init';
        this.timerDuration = 15000;
        this.showAddDimmer = false;
        this.showEditDeleteDimmer = false;
        this.testLocal = true;
        this.SWIPE_DIRECTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
        this.HAMMER_EVENTS = {
            PRESS: 'press'
        };
        if (this.testLocal === true) {
            this.storage.store('ApiHost', '192.168.7.168');
        }
        this.fullPageDimmer = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.testLocal) {
            if (this.thisPage !== undefined) {
                this.onInitGetCaipiHomePages(this.thisPage);
            }
            else {
                this.onInitGetCaipiHomePages(this.init);
            }
        }
        else {
            // this.onInitFinderState();
            setTimeout(function () {
                console.warn('Get CaipiHome pages');
                _this.onInitGetCaipiHomePages('init');
            }, 5000);
        }
        this.subscription = this._caipiHomeElemsP
            .getResponseAfterPost()
            .subscribe(function (res) { return _this.readStatusAfterPost(res); });
    };
    AppComponent.prototype.readStatusAfterPost = function (res) {
        this.statusAfterPost = res;
    };
    AppComponent.prototype.onInitGetCaipiHomePages = function (n) {
        var _this = this;
        return this._caipiHomeService.getCaipiHomePages(n)
            .subscribe(function (allPages) {
            _this._caipiHomePages = allPages;
            _this.fullPageDimmer = false;
            console.warn('all pages are ' + allPages);
        }, function (error) {
            _this.errorMsg = error;
            _this.fullPageDimmer = false;
            alert("Error by taking data from the Server for this App Component " + _this.errorMsg);
            setTimeout(function () {
                _this.goNextPage('/finder');
            }, 2000);
        }, function () {
            _this.ready(_this._caipiHomePages[0]['name']);
            console.warn("complete on init get caipihome pages");
        });
    };
    // action triggered when user swipes
    AppComponent.prototype.swipe = function (currentIndex, action, pName) {
        var _this = this;
        if (action === void 0) { action = this.SWIPE_DIRECTION.RIGHT; }
        this.showAddDimmer = false;
        this.showEditDeleteDimmer = false;
        // console.log("we should retrieve the info for the page "+this.thisPage + " at the first beginning");
        if (currentIndex > this._caipiHomePages.length || currentIndex < 0) {
            return;
        }
        ;
        this.nextIndex = 0;
        // swipe right, next page
        if (action === this.SWIPE_DIRECTION.RIGHT) {
            var isLast = currentIndex === this._caipiHomePages.length - 1;
            this.nextIndex = isLast ? 0 : currentIndex + 1;
            if (isLast) {
                this.nextIndex = 0;
            }
            else {
                this.nextIndex = currentIndex + 1;
            }
            this.thisPage = this._caipiHomePages[this.nextIndex].name;
        }
        // swipe left, previous page
        if (action === this.SWIPE_DIRECTION.LEFT) {
            this.thisPage = pName;
            var isFirst = currentIndex === 0;
            this.nextIndex = isFirst ? this._caipiHomePages.length - 1 : currentIndex - 1;
        }
        // toggle page visibility
        this._caipiHomePages.forEach(function (x, i) { return x['visible'] = (i === _this.nextIndex); });
        this.takeElemsForPage(this.thisPage);
    };
    AppComponent.prototype.swipedUp = function (param) {
        this.showAddDimmer = !this.showAddDimmer;
        var pName = param;
        return this.showAddDimmer;
    };
    AppComponent.prototype.press = function (elem) {
        this.showEditDeleteDimmer = true;
        this.btnObj = elem;
        return this.showEditDeleteDimmer;
    };
    AppComponent.prototype.takeElemsForPage = function (name) {
        var _this = this;
        clearTimeout(this.timer);
        this._caipiHomeElemsP.getElemsThisPage(name)
            .subscribe(function (elemThisPage) {
            if (elemThisPage.length >= 0) {
                _this._caipiHomeElems = elemThisPage;
            }
            else {
                console.log('we do not hane any elements');
                _this._caipiHomeElems = [];
                _this._caipiHomeElems.push(elemThisPage);
                console.log(_this._caipiHomeElems);
            }
        }, function (error) {
            _this.errorMsg = error;
            _this.fullPageDimmer = false;
            alert("Error by taking elements for this page " + _this.errorMsg);
            setTimeout(function () {
                _this.goNextPage('/finder');
            }, 2000);
        }, function () { return _this.startTimeOut(name); });
    };
    AppComponent.prototype.startTimeOut = function (name) {
        var _this = this;
        this.timer = setTimeout(function () { _this.takeElemsForPage(name); }, this.timerDuration);
    };
    AppComponent.prototype.ready = function (page) {
        this.thisPage = page;
        this.takeElemsForPage(page);
    };
    AppComponent.prototype.sendUpdates = function (obj, type) {
        var _this = this;
        this._caipiHomeElemsP.postJSON(obj, type);
        // setTimeout(() => {this.onInitGetCaipiHomePages()},200);
        setTimeout(function () { _this.takeElemsForPage(_this.thisPage); }, 300);
    };
    AppComponent.prototype.returnSliderChanges = function (e) {
        console.log(e);
    };
    AppComponent.prototype.addNewElement = function (obj) {
        var _this = this;
        var count = Object.keys(obj).length;
        var typ;
        if (count === 2) {
            typ = 'addSite';
        }
        else {
            typ = 'add';
        }
        obj = JSON.stringify(obj);
        this._caipiHomeElemsP.postJSON(obj, typ);
        setTimeout(function () {
            if (_this.statusAfterPost === 'success') {
                _this.takeElemsForPage(_this.thisPage);
                _this.showAddDimmer = false;
            }
            else if (_this.statusAfterPost === 'err') {
                alert("Seems that the server encountered an internal error or misconfiguration !");
            }
        }, 300);
    };
    AppComponent.prototype.editDeleteElementApp = function (obj) {
        var _this = this;
        console.log(obj);
        var typ = 'newname';
        obj = JSON.stringify(obj);
        this._caipiHomeElemsP.postJSON(obj, typ);
        setTimeout(function () {
            if (_this.statusAfterPost === 'success') {
                _this.takeElemsForPage(_this.thisPage);
                _this.showAddDimmer = false;
            }
            else if (_this.statusAfterPost === 'err') {
                alert("Seems that the server encountered an internal error or misconfiguration !");
            }
        }, 300);
    };
    AppComponent.prototype.goNextPage = function (page) {
        this.router.navigate([page]);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(995),
            styles: [__webpack_require__(987)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_caipi_home_pages_service__["a" /* CaipiHomePagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_caipi_home_pages_service__["a" /* CaipiHomePagesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_caipi_home_elems_service__["a" /* CaipiHomeElemsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_services_caipi_home_elems_service__["a" /* CaipiHomeElemsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_storage_service__["a" /* StorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
/* onInitFinderState() {
    this.FinderStateSubscription = this.finder.eventstate
      .subscribe((state: number) => {

        console.warn('In the subscribe from finder.eventstate');
        console.warn(state);

        switch (state) {
          case 1: this.finderstatus = 'Remoteaccess'; break;
          case 2: this.finderstatus = 'Bitte lokal anmelden'; break;
          case 3: this.finderstatus = 'Zentrale gefunden'; break;
          case 4: this.finderstatus = 'Bitte Zentrale auswählen'; break;
          case 0: this.finderstatus = 'suche Zentrale...'; break;
          default: this.finderstatus = 'suche Zentrale...'; break;
        }
      });

    this.FinderDataSubscription = this.finder.eventdata
      .subscribe((devlist: FinderData[]) => {
        if (devlist) {
          console.warn(devlist);
          this.devlist = devlist;
        }
      });
  } */
// add Page Method
/*addCaipiHomePage(name: string){
    if(!name) {return;}
    this._caipiHomeService.addCaipiHomePage(name)
                            .subscribe(
                                newPage => this._caipiHomePages.push(name),
                                error => this.errorMsg = <any>error );
}*/
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/app.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__netstate_netstate_service__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinderService = (function () {
    function FinderService(router, storage, netstate) {
        var _this = this;
        this.router = router;
        this.storage = storage;
        this.netstate = netstate;
        this.inited = 0;
        this.called = 0;
        this.eventstate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventdata = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.warn(this.storage);
        console.warn("Constructor from Finder");
        this.NetstateSubscription = this.netstate.eventstate.subscribe(function (state) {
            console.warn("Network change event !");
            _this.findCentral();
        });
    }
    FinderService.prototype.init = function () {
        var _this = this;
        //alert("Init Finder");
        this.findertimer = setInterval(function () {
            _this.finder = new finder();
            _this.called++;
            if (_this.finder) {
                if (_this.findertimer) {
                    clearInterval(_this.findertimer);
                    console.warn("The Finder is searching for Main Devices");
                }
                _this.inited = 1;
                _this.finder.init();
                //alert("we already called  this.finder.init");
                _this.findCentral();
            }
        }, 200);
    };
    FinderService.prototype.setAccessMode = function (mode) {
        this.AccessMode = mode;
    };
    FinderService.prototype.findCentral = function () {
        var _this = this;
        console.warn('Finding ...');
        this.eventstate.emit(0);
        this.finder.sendIdent();
        this.storage.clear('ApiHost');
        setTimeout(function () {
            var devlist = _this.finder._getDeviceList();
        }, 1000);
        this.findertimer1 = setInterval(function () { _this.extractDevList(); }, 300);
    };
    FinderService.prototype.extractDevList = function () {
        var devlist = this.finder.getDeviceList();
        var changepage = 1;
        if (devlist !== null) {
            this.devlist = JSON.parse(devlist);
            //we clear the interval in case we have a list with devices
            clearInterval(this.findertimer1);
            if (this.devlist) {
                if (this.devlist.length === 1) {
                    if ((this.devlist[0].name === 'remoteaccess') && (this.devlist[0].ip === '127.0.0.1')) {
                        var centralmac = this.finder.getCentralMac();
                        var remoteaddr = '127.0.0.1:5555';
                        //alert("remote access and central mac is " + this.finder.getCentralMac());
                        if (centralmac) {
                            //alert("Central Mac is " + centralmac);
                            if (this.AccessMode === 'remote') {
                                changepage = 0;
                                console.warn('Access Mode is remote');
                            }
                            this.eventstate.emit(1);
                            //alert("we emit eventstate 1");
                            this.storage.store('ApiHost', remoteaddr);
                            this.storage.store('AccessMode', "remote");
                            this.setCentralIpAddr(remoteaddr);
                            this.AccessMode = 'remote';
                        }
                        else {
                            this.eventstate.emit(2);
                            this.devlist = null;
                            this.storage.store('AccessMode', 'none');
                            this.setCentralIpAddr('');
                            this.AccessMode = 'none';
                        }
                        if (changepage) {
                            //alert("we go to main page -- the ip address is " + remoteaddr);
                            this.goNextPage("/main");
                        }
                    }
                    else {
                        if (this.AccessMode === 'local') {
                            console.warn("Access Mode is " + this.AccessMode);
                            changepage = 0;
                        }
                        this.eventstate.emit(3);
                        this.finder.setCentralMac(this.devlist[0].smac);
                        this.storage.store('ApiHost', this.devlist[0].ip);
                        this.storage.store('AccessMode', "local");
                        this.setCentralIpAddr(this.devlist[0].ip);
                        this.AccessMode = "local";
                        this.goNextPage("/main");
                    }
                }
                else {
                    var centralmac = this.finder.getCentralMac();
                    for (var _i = 0, _a = this.devlist; _i < _a.length; _i++) {
                        var dev = _a[_i];
                        if (centralmac == dev.smac) {
                            if (this.AccessMode === 'local') {
                                changepage = 0;
                                console.warn("we have more Centrals and Access Mode is local");
                            }
                            this.storage.store('ApiHost', dev.ip);
                            console.warn(this.storage.store('ApiHost', dev.ip));
                            this.storage.store('AccessMode', 'local');
                            this.setCentralIpAddr(dev.ip);
                            this.AccessMode = "local";
                            //if(changepage){
                            if (changepage) {
                                console.warn("we go to finder from for loop");
                                this.goNextPage("/main");
                            }
                        }
                    }
                    this.eventstate.emit(4);
                    this.eventdata.emit(this.devlist);
                }
            }
        }
    };
    FinderService.prototype.setCentralMac = function (smac) {
        this.finder.setCentralMac(smac);
    };
    FinderService.prototype.getCentralMac = function () {
        return this.finder.getCentralMac();
    };
    FinderService.prototype.removeCentralMac = function () {
        this.finder.removeCentralMac();
    };
    FinderService.prototype.setCentralIpAddr = function (ipaddr) {
        this.CentralIpAddr = ipaddr;
        this.storage.store('ApiHost', ipaddr);
    };
    FinderService.prototype.getCentralIpAddr = function () {
        return this.CentralIpAddr;
    };
    FinderService.prototype.getAccessMode = function () {
        return this.AccessMode;
    };
    FinderService.prototype.goNextPage = function (page) {
        var navigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
        };
        this.router.navigate([page], navigationExtras);
    };
    FinderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__netstate_netstate_service__["a" /* NetstateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__netstate_netstate_service__["a" /* NetstateService */]) === 'function' && _c) || Object])
    ], FinderService);
    return FinderService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/finder.service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finder_finder_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__netstate_netstate_service__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MgwclientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MgwclientService = (function () {
    function MgwclientService(storage, netstate, finder) {
        var _this = this;
        this.storage = storage;
        this.netstate = netstate;
        this.finder = finder;
        this.authstate = 0;
        this.eventstate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.init();
        this.NetstateSubscription = this.netstate.eventstate.subscribe(function (state) {
            alert("The Network has changed. After pressing Ok Button wait few seconds !");
            if (_this.mgwclient) {
                _this.mgwclient.reconnect();
            }
        });
    }
    MgwclientService.prototype.init = function () {
        var _this = this;
        this.mgwclienttimer = setInterval(function () {
            _this.mgwclient = new mgwclient();
            if (_this.mgwclient) {
                if (_this.mgwclienttimer) {
                    clearInterval(_this.mgwclienttimer);
                }
                _this.mgwclient.init();
                _this.eventstate.emit(1);
            }
        }, 100);
    };
    MgwclientService.prototype.login = function () {
        var _this = this;
        if (typeof this.mgwclient !== "undefined") {
            this.authstate = 0;
            var authtoken = true;
            if (authtoken) {
                this.mgwclient.login(['mmv@cameronet.com', 'mmv'], function (answer) {
                    console.warn("Login OK MMV");
                }, function () {
                    console.warn("Login error MMV");
                });
                this.mgwclienttimer = setInterval(function () {
                    var authstate = _this.mgwclient.getauthstate();
                    if (authstate !== 0) {
                        if (_this.mgwclienttimer) {
                            clearInterval(_this.mgwclienttimer);
                        }
                        _this.authstate = authstate;
                        //alert(authstate + ' From MGWclient');
                        _this.eventstate.emit(authstate);
                    }
                }, 200);
            }
            else {
                alert("no client token found");
                this.authstate = 3;
            }
        }
    };
    MgwclientService.prototype.getAuthState = function () {
        return this.authstate;
    };
    MgwclientService.prototype.onOnline = function () {
        alert("Mgw online");
    };
    MgwclientService.prototype.onOffline = function () {
        //alert("offline");
    };
    MgwclientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__netstate_netstate_service__["a" /* NetstateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__netstate_netstate_service__["a" /* NetstateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__finder_finder_service__["a" /* FinderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__finder_finder_service__["a" /* FinderService */]) === 'function' && _c) || Object])
    ], MgwclientService);
    return MgwclientService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/mgwclient.service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetstateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetstateService = (function () {
    function NetstateService() {
        this.eventstate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.init();
    }
    NetstateService.prototype.init = function () {
        var _this = this;
        this.netstatetimer = setInterval(function () {
            _this.netstate = new netstate();
            console.warn("this.netstate is next ...");
            console.warn(_this.netstate);
            if (_this.netstate) {
                if (_this.netstatetimer) {
                    clearInterval(_this.netstatetimer);
                }
                _this.netstate.init();
                _this.netstatetimer = setInterval(function () {
                    var state = _this.netstate.getstate();
                    if (state) {
                        _this.eventstate.emit(1);
                    }
                }, 500);
            }
        }, 100);
    };
    NetstateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], NetstateService);
    return NetstateService;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/netstate.service.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaipiHomeElemsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaipiHomeElemsService = (function () {
    function CaipiHomeElemsService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.postStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.protocol = 'http://';
        this.pageParam = '/cgi-bin/init.cgi?page=';
        this.queryParam = '/cgi-bin/query.cgi';
        this.withoutMGW = true;
        if (this.withoutMGW === false) {
            this.initCGI = this.protocol + this.storage.retrieve('ApiHost') + this.pageParam;
            this.queryCGI = this.protocol + this.storage.retrieve('ApiHost') + this.queryParam;
        }
        else {
            this.initCGI = this.pageParam;
            this.queryCGI = this.queryParam;
        }
    }
    CaipiHomeElemsService.prototype.getElemsThisPage = function (page) {
        this.pageUrl = this.initCGI + "{\"name\":\"" + page + "\"}";
        console.log("Get elems for the page " + page);
        console.log(this.pageUrl);
        return this.http.get(this.pageUrl)
            .map(this.extractElems)
            .catch(this.handleError);
    };
    CaipiHomeElemsService.prototype.extractElems = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    CaipiHomeElemsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + error.statusText + " || '' " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    // The function for sending data to the server
    CaipiHomeElemsService.prototype.postJSON = function (singleJSON, typ) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        switch (typ) {
            case 'btn':
                body.set(typ, singleJSON);
                break;
            case 'slider':
                body.set(typ, singleJSON);
                break;
            case 'text':
                body.set(typ, singleJSON);
                break;
            case 'add':
                body.set(typ, singleJSON);
                break;
            case 'addSite':
                body.set(typ, singleJSON);
                break;
            case 'newname':
                body.set(typ, singleJSON);
                break;
            default:
                console.log('Default element');
                break;
        }
        console.log(body);
        // here we send our request
        return this.http.post(this.queryCGI, body, options)
            .map(function (res) {
            res = res.json();
            console.log(res[0]);
        })
            .subscribe(function (singleJSON) {
            _this.postStatus.emit('success');
            return 'success';
        }, function (error) {
            _this.postStatus.emit('err');
            console.log(error.json());
        }, function () {
            console.log('completed');
            return 'completed';
        });
    };
    CaipiHomeElemsService.prototype.getResponseAfterPost = function () {
        return this.postStatus;
    };
    CaipiHomeElemsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === 'function' && _b) || Object])
    ], CaipiHomeElemsService);
    return CaipiHomeElemsService;
    var _a, _b;
}());
// private initCGI = 'http://192.168.7.113/cgi-bin/init.cgi?page=';
// private queryCGI = 'http://192.168.7.113/cgi-bin/query.cgi';
// private initCGI = 'http://192.168.7.153/cgi-bin/init.cgi?page=';
// private queryCGI = 'http://192.168.7.153/cgi-bin/query.cgi';
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/caipi-home-elems.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaipiHomePagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** @type - Service for asking the CaipiHome-Main-Device for the Pages
            HTTP-Modul from Angular will be imported
*/
var CaipiHomePagesService = (function () {
    function CaipiHomePagesService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.withoutMGW = true;
    }
    CaipiHomePagesService.prototype.getCaipiHomePages = function (name) {
        if (name !== undefined) {
            this.thisPage = name;
        }
        ;
        if (this.storage.retrieve('ApiHost') !== undefined) {
            if (this.withoutMGW === false) {
                this.allPagesUrl = 'http://' + this.storage.retrieve('ApiHost') + '/cgi-bin/init.cgi?pages=';
            }
            else {
                this.allPagesUrl = '/cgi-bin/init.cgi?pages=';
            }
        }
        return this.http.get(this.allPagesUrl)
            .map(this.extractPages)
            .catch(this.handleError);
    };
    CaipiHomePagesService.prototype.extractPages = function (res) {
        var body = res.json();
        console.warn("Success " + body);
        if (body !== undefined) {
            body.forEach(function (x, i) {
                console.log(body);
                (i === 0) ? x['visible'] = true : x['visible'] = false;
            });
        }
        return body || {};
    };
    CaipiHomePagesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + error.statusText + " || '' " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.warn('ERROR Get CaipiHome Pages ' + errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CaipiHomePagesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === 'function' && _b) || Object])
    ], CaipiHomePagesService);
    return CaipiHomePagesService;
    var _a, _b;
}());
//private allPagesUrl = 'http://192.168.7.153/cgi-bin/init.cgi?pages=';
//private allPagesUrl = 'http://192.168.7.113/cgi-bin/init.cgi?pages=';
//private allPagesUrl = '/cgi-bin/init.cgi?pages=';
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/caipi-home-pages.service.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_mgwclient_mgwclient_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_finder_finder_service__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinderComponent = (function () {
    function FinderComponent(router, titleService, finder, mgwclient) {
        this.router = router;
        this.titleService = titleService;
        this.finder = finder;
        this.mgwclient = mgwclient;
        this.STEVE = './img/steve.jpg';
    }
    FinderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.finder.init();
        console.warn("In the ng on init from Finder");
        this.FinderStateSubscription = this.finder.eventstate
            .subscribe(function (state) {
            switch (state) {
                case 1:
                    _this.finderstatus = 'Remoteaccess';
                    _this.mgwclient.login();
                    break;
                case 2:
                    _this.finderstatus = 'Please register first in your local Network';
                    break;
                case 3:
                    _this.finderstatus = 'Main Central found';
                    break;
                case 4:
                    _this.finderstatus = 'Please choose your Main Device';
                    break;
                case 0:
                default:
                    _this.finderstatus = "searching for the Main Device...";
                    break;
            }
        });
        this.FinderDataSubscription = this.finder.eventdata
            .subscribe(function (devlist) {
            if (devlist) {
                _this.devlist = devlist;
            }
            console.warn("Finder event data is" + _this.devlist);
        });
        this.titleService.setTitle('Finder');
        //this.alertNotifier.reset();
        if (this.finder.inited) {
            this.finder.setAccessMode("none");
        }
    };
    FinderComponent.prototype.goNextPage = function () {
        var navigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
        };
        console.warn("Navigation extras are");
        console.warn(navigationExtras);
        //this.router.navigate(["/main"], navigationExtras);
        this.router.navigate(['/main']);
        console.warn("we should navigate to main");
    };
    FinderComponent.prototype.setCentraleMac = function (idx) {
        if (idx < 0) {
            return;
        }
        //alert("setCentraleMac: " + idx);
        //alert("setCentraleMac: " + this.devlist[idx].smac);
        //alert("setCentraleMac: " + this.devlist[idx].ip);
        this.finder.setCentralMac(this.devlist[idx].smac);
        this.finder.setCentralIpAddr(this.devlist[idx].ip);
        this.goNextPage();
    };
    FinderComponent.prototype.ngOnDestroy = function () {
        this.FinderStateSubscription.unsubscribe();
        this.FinderDataSubscription.unsubscribe();
    };
    FinderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finder',
            template: __webpack_require__(998),
            styles: [__webpack_require__(990)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_finder_finder_service__["a" /* FinderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_services_finder_finder_service__["a" /* FinderService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_mgwclient_mgwclient_service__["a" /* MgwclientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_mgwclient_mgwclient_service__["a" /* MgwclientService */]) === 'function' && _d) || Object])
    ], FinderComponent);
    return FinderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/finder.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_finder_finder_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_mgwclient_mgwclient_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_storage_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RemoteComponent = (function () {
    function RemoteComponent(router, titleService, finder, mgwclient, storage) {
        this.router = router;
        this.titleService = titleService;
        this.finder = finder;
        this.mgwclient = mgwclient;
        this.storage = storage;
        this.status = null;
        this.mgwtimer = null;
    }
    RemoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Remote Access');
        this.status = 'Login...';
        if (this.finder.getAccessMode() === 'none') {
            this.status = "No Central Device have been found. Please go first in your local Network.";
        }
        else {
            this.MgwclientStateSubscription = this.mgwclient.eventstate
                .subscribe(function (state) {
                switch (state) {
                    case 1:
                        console.warn("state is 1");
                        _this.goNextPage('/finder');
                        _this.status = 'MGW Client is instantiated';
                        break;
                    case 2:
                        _this.goNextPage('/main');
                        _this.status = 'MGW Client is sending a state ' + state + '. We will go on the Finder Page';
                        console.warn('state is 2');
                        break;
                    case 3:
                        _this.status = 'state is 3';
                        alert("ERROR");
                        break;
                    default:
                        _this.status = "No state until now from MGW-Client";
                        console.warn("state is default");
                        break;
                }
            });
        }
    };
    RemoteComponent.prototype.goNextPage = function (page) {
        var navigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
        };
        this.router.navigate([page], navigationExtras);
    };
    RemoteComponent.prototype.ngOnDestroy = function () { };
    RemoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'remote',
            template: __webpack_require__(999),
            styles: [__webpack_require__(986)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_finder_finder_service__["a" /* FinderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_finder_finder_service__["a" /* FinderService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_mgwclient_mgwclient_service__["a" /* MgwclientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_services_mgwclient_mgwclient_service__["a" /* MgwclientService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_services_storage_service__["a" /* StorageService */]) === 'function' && _e) || Object])
    ], RemoteComponent);
    return RemoteComponent;
    var _a, _b, _c, _d, _e;
}());
/*alert("before mgwclient login");

this.mgwtimer = setInterval(() => {

    let authstate = this.mgwclient.getAuthState();

    if(authstate != 0){
        if(this.mgwtimer){ clearInterval(this.mgwtimer); }

        /*alert("Remote authstate: " + authstate);
        alert("auth state is ....");
        alert(authstate);* /

        switch(authstate){
            case 1: this.router.navigate(['/finder']);
                /*let authtoken = this.storage.retrieve('auth_token');
                if(authtoken){
                    this.goNextPage('/dashboard');
                }else{
                    this.status = "Keine Zentrale gefunden bitte im Lokal Netzwerk anmelden";
                }* /
                break;
            case 2:
            case 3:  this.status = "Keine Zentrale gefunden";
                    /*setTimeout(function(){
                        this.router.navigate(['/finder']);
                    },1000);* /
                    break;
            default:
        }
    }
}, 100);*/
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/remote.component.js.map

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 620;


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(786);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/main.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplebtnDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//declare var $: any;
var SimplebtnDirective = (function () {
    function SimplebtnDirective(el, appComp) {
        this.el = el;
        this.appComp = appComp;
        this.selectedElem = this.el.nativeElement;
    }
    SimplebtnDirective.prototype.prepareJSON = function () {
        this.infoBtn['value'] = '0';
        this.infoBtn = JSON.stringify(this.infoBtn || null);
        console.log(this.infoBtn);
        this.appComp.sendUpdates(this.infoBtn, 'btn');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SimplebtnDirective.prototype, "infoBtn", void 0);
    SimplebtnDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[caipiSimplebtn]',
            host: {
                //'(click)':'prepareJSON()'
                '(change)': 'prepareJSON()'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === 'function' && _b) || Object])
    ], SimplebtnDirective);
    return SimplebtnDirective;
    var _a, _b;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/simplebtn.directive.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderbtnDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderbtnDirective = (function () {
    function SliderbtnDirective(el, appComp) {
        this.el = el;
        this.appComp = appComp;
        this.selectedElem = this.el.nativeElement;
    }
    SliderbtnDirective.prototype.ngOnInit = function () {
        console.log(this.infoSlider);
        delete this.infoSlider.pos;
        delete this.infoSlider.min;
        delete this.infoSlider.max;
    };
    SliderbtnDirective.prototype.onSliderChange = function () {
        this.infoSlider['value'] = "" + this.val;
        console.log(this.infoSlider['value']);
        this.infoSlider = JSON.stringify(this.infoSlider || null);
        console.log(this.infoSlider);
        this.appComp.sendUpdates(this.infoSlider, 'slider');
    };
    SliderbtnDirective.prototype.prepareJSON = function () {
        this.infoSlider['value'] = this.val;
        this.infoSlider = JSON.stringify(this.infoSlider || null);
        console.log(this.infoSlider);
        this.appComp.sendUpdates(this.infoSlider, 'btn');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SliderbtnDirective.prototype, "infoSlider", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SliderbtnDirective.prototype, "val", void 0);
    SliderbtnDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[caipiSliderBtn]' /*
            host: {
              '(change)': 'onSliderChange()'
            }*/
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === 'function' && _b) || Object])
    ], SliderbtnDirective);
    return SliderbtnDirective;
    var _a, _b;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/sliderbtn.directive.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_semantic_ng_semantic__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_semantic_ui__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_nouislider__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_webstorage__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__simplebtn_simplebtn_component__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sliderbtn_sliderbtn_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__text_elem_text_elem_component__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__caipihome_dimmer_caipihome_dimmer_component__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toasty__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_services_caipi_home_pages_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_services_caipi_home_elems_service__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_services_finder_finder_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_services_netstate_netstate_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_services_storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_services_mgwclient_mgwclient_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_directives_sliderbtn_directive__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_directives_simplebtn_directive__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_responsive__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__finder_finder_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_routes__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__remote_remote_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__editdelete_dimmer_editdelete_dimmer_component__ = __webpack_require__(789);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        // ROUTING HERE!
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_directives_sliderbtn_directive__["a" /* SliderbtnDirective */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__simplebtn_simplebtn_component__["a" /* SimplebtnComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sliderbtn_sliderbtn_component__["a" /* SliderbtnComponent */],
                __WEBPACK_IMPORTED_MODULE_13__text_elem_text_elem_component__["a" /* TextElemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__caipihome_dimmer_caipihome_dimmer_component__["a" /* CaipihomeDimmerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__app_directives_simplebtn_directive__["a" /* SimplebtnDirective */],
                __WEBPACK_IMPORTED_MODULE_25__finder_finder_component__["a" /* FinderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__remote_remote_component__["a" /* RemoteComponent */],
                __WEBPACK_IMPORTED_MODULE_28__editdelete_dimmer_editdelete_dimmer_component__["a" /* EditdeleteDimmerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_semantic_ng_semantic__["a" /* NgSemanticModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_15_ng2_toasty__["a" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_semantic_ui__["a" /* L_SEMANTIC_UI_MODULE */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_24_ng2_responsive__["ResponsiveModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_webstorage__["Ng2Webstorage"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__app_services_mgwclient_mgwclient_service__["a" /* MgwclientService */],
                __WEBPACK_IMPORTED_MODULE_16__app_services_caipi_home_pages_service__["a" /* CaipiHomePagesService */],
                __WEBPACK_IMPORTED_MODULE_17__app_services_caipi_home_elems_service__["a" /* CaipiHomeElemsService */],
                __WEBPACK_IMPORTED_MODULE_18__app_services_finder_finder_service__["a" /* FinderService */],
                __WEBPACK_IMPORTED_MODULE_19__app_services_netstate_netstate_service__["a" /* NetstateService */],
                __WEBPACK_IMPORTED_MODULE_20__app_services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
/*
export class CaipiHammerConfig extends HammerGestureConfig {
  events = ["swipeup","swiperight","swipeleft","swipedown"];
  overrides = <any>{
    'swipe': {
      velocity: 0.1,
      threshold: 0.1
    }
  }
}*/
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/app.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finder_finder_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remote_remote_component__ = __webpack_require__(535);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: 'remote', component: __WEBPACK_IMPORTED_MODULE_3__remote_remote_component__["a" /* RemoteComponent */] },
    { path: 'finder', component: __WEBPACK_IMPORTED_MODULE_2__finder_finder_component__["a" /* FinderComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] }
];
// - Updated Export
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/app.routes.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaipihomeDimmerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CaipihomeDimmerComponent = (function () {
    function CaipihomeDimmerComponent(el) {
        this.el = el;
        this.btnType = 'simple button';
        this.newElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.caipiDimmer = this.el.nativeElement;
    }
    CaipihomeDimmerComponent.prototype.ngOnChanges = function () {
        console.log('on changes dimmer is ' + this.fromComponent);
        console.log('on changes dimmer is on page' + this.infoPage);
        if (this.fromComponent === true) {
            this.showDimmer();
        }
        else if (this.fromComponent === false) {
            this.hideDimmer();
            this.hideModal();
        }
    };
    CaipihomeDimmerComponent.prototype.postNewElement = function (o) {
        this.obj = o;
        this.newElement.emit(this.obj);
    };
    CaipihomeDimmerComponent.prototype.showDimmer = function () {
        this.bottomSidebar.show({
            opacity: .7,
            transition: 'overlay'
        });
    };
    CaipihomeDimmerComponent.prototype.hideDimmer = function () {
        this.bottomSidebar.hide();
    };
    CaipihomeDimmerComponent.prototype.addElement = function (val) {
        if ((val === undefined) || (val === '')) {
            alert('Please give a name for the new element');
            return;
        }
        ;
        console.log(val);
        var obj = this.prepareJSON(val);
        this.postNewElement(obj);
        this.simple = '';
    };
    CaipihomeDimmerComponent.prototype.showModal = function (typ) {
        this.elemType = typ;
        this.caipiModal.show();
    };
    CaipihomeDimmerComponent.prototype.hideModal = function () {
        this.caipiModal.hide();
    };
    CaipihomeDimmerComponent.prototype.prepareJSON = function (val) {
        var obj = {};
        if (this.elemType === 'page') {
            if (val === this.infoPage) {
                alert('Sorry but you already named this Page with this name ! Please choose another one');
                return false;
            }
            obj["name"] = val;
            obj["data-prev"] = this.infoPage;
        }
        else {
            obj['name'] = val;
            obj['page'] = this.infoPage;
            obj['status'] = '0';
            obj['type'] = this.elemType;
            obj['value'] = '0';
            obj['min'] = '0';
            obj['max'] = '100';
            obj['pos'] = '13';
        }
        return obj;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], CaipihomeDimmerComponent.prototype, "fromComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CaipihomeDimmerComponent.prototype, "infoPage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CaipihomeDimmerComponent.prototype, "caipiShowDimmer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], CaipihomeDimmerComponent.prototype, "newElement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bottomSidebar'), 
        __metadata('design:type', Object)
    ], CaipihomeDimmerComponent.prototype, "bottomSidebar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('caipiModal'), 
        __metadata('design:type', Object)
    ], CaipihomeDimmerComponent.prototype, "caipiModal", void 0);
    CaipihomeDimmerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-caipihome-dimmer',
            template: __webpack_require__(996),
            styles: [__webpack_require__(988)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], CaipihomeDimmerComponent);
    return CaipihomeDimmerComponent;
    var _a;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/caipihome-dimmer.component.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditdeleteDimmerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditdeleteDimmerComponent = (function () {
    function EditdeleteDimmerComponent() {
        this.editDelElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.TITLES = [
            { action: "Are you sure you want to delete this Element ?" },
            { action: "Give please the new name for this Element " },
            { action: "Are you sure you want to delete this Page ? All the elements from this page will be deleted too !" }
        ];
    }
    EditdeleteDimmerComponent.prototype.ngOnChanges = function () {
        console.log(this.btnType);
        if (this.btnType !== undefined) {
            //console.log(this.btnType);
            this.elemName = this.btnType.name;
            this.pageName = this.btnType.page;
            console.log(this.elemName);
            console.log(this.pageName);
        }
        if (this.fromComponent === true) {
            this.showDimmer();
        }
        else if (this.fromComponent === false) {
            this.hideDimmer();
            this.hideModal();
        }
    };
    EditdeleteDimmerComponent.prototype.editDeleteElement = function (edited) {
        this.obj = this.btnType;
        this.obj['old'] = this.btnType.name;
        this.obj['changed'] = edited;
        if (this.obj['old'] === this.obj['changed']) {
            alert("Sorry, you should give another name than the precedence !");
            return;
        }
        delete this.obj.name;
        delete this.obj.status;
        this.editDelElement.emit(this.obj);
    };
    EditdeleteDimmerComponent.prototype.showDimmer = function () {
        this.bottomSidebar.show({
            opacity: .7,
            transition: 'overlay'
        });
    };
    EditdeleteDimmerComponent.prototype.hideDimmer = function () {
        this.bottomSidebar.hide();
    };
    EditdeleteDimmerComponent.prototype.showModal = function (typ) {
        (typ == 1) ? this.editField = true : this.editField = false;
        this.title = this.TITLES[typ].action;
        console.log(this.title);
        this.caipiModal.show();
    };
    EditdeleteDimmerComponent.prototype.hideModal = function () {
        this.caipiModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], EditdeleteDimmerComponent.prototype, "fromComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EditdeleteDimmerComponent.prototype, "infoPage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EditdeleteDimmerComponent.prototype, "btnType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], EditdeleteDimmerComponent.prototype, "editDelElement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bottomSidebar'), 
        __metadata('design:type', Object)
    ], EditdeleteDimmerComponent.prototype, "bottomSidebar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('caipiModal'), 
        __metadata('design:type', Object)
    ], EditdeleteDimmerComponent.prototype, "caipiModal", void 0);
    EditdeleteDimmerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editdelete-dimmer',
            template: __webpack_require__(997),
            styles: [__webpack_require__(989)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditdeleteDimmerComponent);
    return EditdeleteDimmerComponent;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/editdelete-dimmer.component.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplebtnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimplebtnComponent = (function () {
    function SimplebtnComponent() {
        this.HAMMER_EVENTS = {
            PRESS: "press"
        };
    }
    SimplebtnComponent.prototype.press = function (btnInfo, elem, pName) {
        console.log(btnInfo);
    };
    SimplebtnComponent.prototype.ngOnInit = function () {
        this.nameBtn = this.btnInfo.name;
        this.checked = (this.btnInfo.status === '1') ? true : false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SimplebtnComponent.prototype, "btnInfo", void 0);
    SimplebtnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simplebtn',
            template: __webpack_require__(1000),
            styles: [__webpack_require__(991)]
        }), 
        __metadata('design:paramtypes', [])
    ], SimplebtnComponent);
    return SimplebtnComponent;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/simplebtn.component.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderbtnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderbtnComponent = (function () {
    function SliderbtnComponent(el, appComp) {
        this.el = el;
        this.appComp = appComp;
        this.selectedElem = this.el.nativeElement;
    }
    SliderbtnComponent.prototype.ngOnInit = function () {
        this.nameBtn = this.sliderInfo.name;
        this.value = this.sliderInfo.value;
        this.checked = (this.sliderInfo.status === '1') ? true : false;
    };
    SliderbtnComponent.prototype.onSliderChange = function (v, info) {
        var valObj = info;
        this.rmGarbageFromJorg(valObj);
        valObj['value'] = v.toString();
        console.log(valObj);
        /*console.dir(this.selectedElem);
        console.dir(this.mdSlider);
        console.log(v);
        console.log(info);*/
        this.completeInfo = JSON.stringify(valObj || null);
        console.log(this.completeInfo);
        this.appComp.sendUpdates(this.completeInfo, 'slider');
    };
    SliderbtnComponent.prototype.rmGarbageFromJorg = function (obj) {
        delete obj.pos;
        delete obj.min;
        delete obj.max;
        return obj;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SliderbtnComponent.prototype, "sliderInfo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], SliderbtnComponent.prototype, "value", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ref'), 
        __metadata('design:type', Object)
    ], SliderbtnComponent.prototype, "mdSlider", void 0);
    SliderbtnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sliderbtn',
            template: __webpack_require__(1001),
            styles: [__webpack_require__(992)],
            inputs: ['nameSlider', 'sliderInfo']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === 'function' && _b) || Object])
    ], SliderbtnComponent);
    return SliderbtnComponent;
    var _a, _b;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/sliderbtn.component.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextElemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextElemComponent = (function () {
    function TextElemComponent() {
    }
    TextElemComponent.prototype.ngOnInit = function () {
    };
    TextElemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-elem',
            template: __webpack_require__(1002),
            styles: [__webpack_require__(993)],
            inputs: ['nameText', 'message']
        }), 
        __metadata('design:paramtypes', [])
    ], TextElemComponent);
    return TextElemComponent;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/text-elem.component.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/environment.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/polyfills.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__ = __webpack_require__(575);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.store = function (key, value) {
        this.storage.store(key, value);
    };
    StorageService.prototype.retrieve = function (key) {
        return this.storage.retrieve(key);
    };
    StorageService.prototype.clear = function (key) {
        this.storage.clear(key);
    };
    StorageService.prototype.observe = function (key) {
        return this.storage.observe(key);
    };
    StorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__["LocalStorageService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_webstorage__["LocalStorageService"]) === 'function' && _a) || Object])
    ], StorageService);
    return StorageService;
    var _a;
}());
//# sourceMappingURL=/FS01/HOMES/ac/CaipiHome/src/storage.service.js.map

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = ".h100{\n\theight: 100vh;\n}\n\n.scrollbar{\n\toverflow-y: auto;\n\twebkit-overflow-scrolling: touch;\n\toverflow-scrolling:touch;\n}\n\n.visible {\n    display: block;\n}\n\n.hidden {\n    display: none;\n}\n\n.title-pages{\n\tfont-size:18px;\n}\n\n.floated-right{\n\tfloat: right;\n}\n"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "md-slide-toggle{\n\tmargin-top:1px;\n\tmargin-bottom:1px;\n}\n.white-back{\n\tbackground-color: white;\n}"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "/*\nCSS for Semantic UI Style Slider taken from:\nhttp://codepen.io/anon/pen/xZYpGQ\nhttps://github.com/Semantic-Org/Semantic-UI/issues/1336\n*/\n/*\ninput[type=\"range\"] {\n  width: 90%;\n  border:1px solid #ccc;\n  -webkit-appearance: none;\n  padding: 0;\n  height: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  position: absolute;\n  z-index: 999;\n}\n\ninput[type=\"range\"]:focus {\n  border-color: #ccc;\n  outline: none !important;\n}\n\ninput[type=\"range\"]::-moz-range-track {\n  background: none;\n  border: 0;\n}\n\ninput[type=\"range\"]::-moz-focus-outer {\n  border: 0;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: 1px solid #ddd;\n  height: 2rem;\n  width: 2rem;\n  background: #fff;\n  background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  background: #fff -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  background: #fff -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  background: #fff -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  border-radius: 100%;\n  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15), 0 0 0 1px rgba(34, 36, 38, .15) inset;\n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n  border: 1px solid #ddd;\n  height: 2rem;\n  width: 2rem;\n  background: #fff;\n  background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  background: #fff -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  background: #fff -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  background: #fff -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.05));\n  border-radius: 100%;\n  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15), 0 0 0 1px rgba(34, 36, 38, .15) inset;\n}\n*/\n\nmd-slider {\n  width: 100%;\n}\n\nmd-slide-toggle{\n  margin-top:1px;\n  margin-bottom:1px;\n}\n\n.no-padding{\n  padding: 0px 0px 0px 0px !important;\n}\n.white-back{\n  background-color: white !important;\n}"

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = ".white-back{\n  background-color: white !important;\n}"

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = "<!--app-sliderbtn></app-sliderbtn>\n\n<app-simplebtn></app-simplebtn>\n\n<app-text-elem></app-text-elem-->\n\n<div class=\"ui active dimmer\"\n    [style.visibility]=\" (fullPageDimmer == true) ? 'visible' : 'hidden' \">\n  <div class=\"ui big text loader\">Preparing elements</div>\n</div>\n\n<div class=\"h100\"\n  *ngFor=\"let page of _caipiHomePages; let idx=index; let last = last\"\n  (swipeleft)=\"swipe(idx, $event.type, page['data-next'])\"\n  (swiperight)=\"swipe(idx, $event.type, page['name'])\"\n  (swipeup)=\"swipedUp(page['name'])\"\n  [class.visible]=\"page.visible\"\n  [class.hidden]=\"!page.visible\">\n\n  <div class=\"ui one column grid\">\n    <div class=\"column\">\n      <div class=\"ui raised segment\">\n        <a class=\"ui green ribbon label\">You are on the page {{page['name']}}. Swipe to the next page {{page['data-next']}}</a>\n        <h2 class=\"title-pages\">{{page['name']}}</h2>\n      </div>\n    </div>\n  </div>\n\n  <div class='elems-from-{{page.name}} all-elems-page'\n    *ngFor=\"let elem of _caipiHomeElems; let idx=index\">\n\n    <div ngSwitch={{elem?.type}} class=\"caipiElemsContainer\" (press)=\"press(elem)\">\n      <div *ngSwitchCase=\"'ok'\">\n        <h1> NO elements for this page</h1>\n      </div>\n      <div *ngSwitchCase=\"'btn'\">\n        <app-simplebtn [btnInfo]='elem'></app-simplebtn>\n      </div>\n      <div *ngSwitchCase=\"'btn-slider'\">\n        <app-sliderbtn [nameSlider]='elem.name' [sliderInfo]='elem'></app-sliderbtn>\n      </div>\n      <div *ngSwitchCase=\"'text'\">\n        <app-text-elem [nameText]='elem.name' [message]='elem.status'></app-text-elem>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<app-caipihome-dimmer [fromComponent]='showAddDimmer' [infoPage]=\"thisPage\" (newElement)=\"addNewElement($event)\"></app-caipihome-dimmer>\n\n<app-editdelete-dimmer [fromComponent]='showEditDeleteDimmer' [infoPage]=\"thisPage\" [btnType]=\"btnObj\" (editDelElement)=\"editDeleteElementApp($event)\">\n</app-editdelete-dimmer>\n"

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = "<!--sm-dimmer #ref>\n\n</sm-dimmer-->\n\n\n\n<sm-modal title=\"Adding a {{btnType}} element\" class=\"basic\" #caipiModal>\n    <modal-content>\n        <div class=\"ui fluid icon input\">\n          <input #caipiInput type=\"text\" placeholder=\"Name for a {{btnType}}...\"\n            [value]=\"simple\"\n            [(ngModel)]=\"simple\"\n            (keyup.enter)=\"addElement(caipiInput.value)\">\n          <i (click)=\"simple = ''\" class=\"window close outline circular link icon black\"></i>\n        </div>\n        <br>\n        <button class=\"ui positive basic button\" (click)=\"addElement(caipiInput.value)\">Add {{simple}} to this page</button>\n    </modal-content>\n</sm-modal>\n\n<sm-sidebar class=\"bottom inverted nine item labeled icon sidebar menu\" #bottomSidebar>\n   <a class=\"item\" (click)=\"showModal('btn')\">\n        <i class=\"add circle icon green\"></i>\n        <p class=\"green_text\">Add Button Element</p>\n   </a>\n   <a class=\"item\" (click)=\"showModal('btn-slider')\">\n        <i class=\"add circle icon green\"></i>\n        <p class=\"green_text\">Add Button Slider</p>\n   </a>\n   <a class=\"item\" (click)=\"showModal('text')\">\n        <i class=\"add circle icon green\"></i>\n        <p class=\"green_text\">Add Text Element</p>\n   </a>\n   <a class=\"item\" (click)=\"showModal('page')\">\n        <i class=\"add circle icon green\"></i>\n        <p class=\"green_text\">Add a new Page</p>\n   </a>\n</sm-sidebar>\n"

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = "<sm-modal [title]=\"title\" class=\"basic\" #caipiModal>\n    <modal-content>\n      <div *ngIf=\"editField == true\">\n        <div class=\"ui fluid icon input\">\n          <input #caipiInput type=\"text\" placeholder=\"Name for a {{elemName}} ...\" \n            [value]=\"simple\" \n            [(ngModel)]=\"simple\" \n            (keyup.enter)=\"editDeleteElement(caipiInput.value)\">\n            <i (click)=\"simple = ''\" class=\"window close outline circular link icon black\"></i>\n        </div>\n        <br>\n        <button class=\"ui positive basic button\" (click)=\"editDeleteElement(caipiInput.value)\"> Edit {{simple}} to this page </button>\n      </div>  \n      <div *ngIf=\"editField == false\">\n        <div class=\"ui fluid icon input\">\n          <!--input #caipiDelete type=\"text\" placeholder=\"We wanna delete this thing ...\" \n            [value]=\"simple\" \n            [(ngModel)]=\"simple\" \n            (keyup.enter)=\"addElement(caipiInput.value)\">\n            <i (click)=\"simple = ''\" class=\"window close outline circular link icon black\"></i-->\n       </div>\n        <br>\n        <button class=\"ui positive basic button\" (click)=\"editDeleteElement(caipiInput.value)\"> Delete </button>\n      </div>  \n    </modal-content>\n</sm-modal>\n\n<sm-sidebar class=\"bottom inverted nine item labeled icon sidebar menu\" #bottomSidebar>\n   <a class=\"item\" (click)=\"showModal(0)\">\n        <i class=\"remove circle icon red\"></i>\n        <p class=\"green_text\">Delete Element {{elemName}}</p>\n   </a>\n   <a class=\"item\" (click)=\"showModal(1)\">\n        <i class=\"edit icon icon yellow\"></i>\n        <p class=\"green_text\">Edit Element {{elemName}}</p>\n   </a>\n   <a class=\"item\" (click)=\"showModal(2)\">\n        <i class=\"remove circle icon red\"></i>\n        <p class=\"green_text\">Delete Page {{pageName}}</p>\n   </a>\n</sm-sidebar>"

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "  <!--router-outlet></router-outlet-->\n  <br>\n  <div class=\"ui container center aligned card\">\n    <div class=\"image\">\n      <img [src]=\"'assets/img/steve.jpg'\" width=\"100\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Welcome to CaipiHome</div>\n      <div class=\"meta\">\n        <p> Finder </p>\n      </div>\n      <div class=\"meta\">\n        <p>{{ finderstatus }}</p>\n      </div>\n    </div>\n    <select  class=\"ui fluid dropdown\" (change)=\"setCentraleMac($event.target.value)\">\n      <option [value]=\"-1\" i18n>{{ finderstatus }}</option>\n      <option *ngFor=\"let dev of devlist; let i = index\" [value]=\"i\" i18n>{{ dev.name }}</option>\n    </select>\n  </div>\n\n<!--a [router-link]=\"['main']\">Main</a-->\n<!--div class=\"content\">\n<a class=\"header\" href=\"#\">Welcome to CaipiHome</a>\n    <div class=\"meta\">\n      <p>{{ finderstatus }}</p>\n      <a>Seems that around you are some Control Centers ... please choose one of them</a>\n    </div>\n    <hr/>\n    <div class=\"ui fluid selection dropdown\">\n      <select  class=\"ui fluid dropdown\" (change)=\"setCentraleMac($event.target.value)\">\n        <option [value]=\"-1\" i18n>{{ finderstatus }}</option>\n        <option *ngFor=\"let dev of devlist; let i = index\" [value]=\"i\" i18n>{{ dev.name }}</option>\n      </select>\n    </div>\n</div-->\n"

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n  <!--br>\r\n  <div class=\"ui container center aligned card\">\r\n    <div class=\"image\">\r\n      <img [src]=\"'assets/img/steve.jpg'\" width=\"100\">\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">Welcome to CaipiHome</div>\r\n      <div class=\"meta\">\r\n        <p> Remote </p>\r\n      </div>\r\n      <div class=\"meta\">\r\n        <p>{{status}}</p>\r\n      </div>\r\n    </div>\r\n  </div-->"

/***/ })

},[1253]);
//# sourceMappingURL=main.bundle.map