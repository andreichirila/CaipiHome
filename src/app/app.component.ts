import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { CaipiHomePagesService } from './app-services/caipi-home-pages.service';
import { CaipiHomeElemsService } from './app-services/caipi-home-elems.service';
import { Subscription } from 'rxjs/Subscription';
import { FinderData } from './app-services/finder/finderdata';
import { StorageService } from './app-services/storage.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //@ViewChild('caipiElemsContainer') caipiElemsContainer: any;
  finderstatus: string;
  devlist: FinderData[];

  FinderStateSubscription: Subscription;
  FinderDataSubscription: Subscription;

  // firstPage: string;
  errorMsg: string;
  mode = 'Observable';
  _caipiHomePages: any[];
  _caipiHomeElems: any[];
  thisPage: string;
  init = 'init';
  timer: any;
  timerDuration: Number =  15000;
  showAddDimmer: boolean = false;
  showEditDeleteDimmer: boolean = false;
  nextIndex: number;
  testLocal: boolean = true;
  subscription: any;
  statusAfterPost: string;
  fullPageDimmer: boolean;
  btnObj: Object;
  editedElem: string;

  SWIPE_DIRECTION = {
    LEFT: 'swipeleft',
    RIGHT: 'swiperight',
    UP: 'swipeup',
    DOWN: 'swipedown'
  };

  HAMMER_EVENTS = {
    PRESS: 'press'
  };

  constructor ( private _caipiHomeService: CaipiHomePagesService,
                private _caipiHomeElemsP: CaipiHomeElemsService,
                private storage: StorageService,
                private router: Router
              ) {
    if (this.testLocal === true) {
      this.storage.store('ApiHost', '192.168.7.168');
    }
    this.fullPageDimmer = true;
  }
    ngOnInit() {
      if (this.testLocal) {
        if (this.thisPage !== undefined) {
          this.onInitGetCaipiHomePages(this.thisPage);
        } else {
          this.onInitGetCaipiHomePages(this.init);
        }
      } else {
        // this.onInitFinderState();
        setTimeout(() => {
          console.warn('Get CaipiHome pages');
          this.onInitGetCaipiHomePages('init');
        }, 5000);
      }

      this.subscription = this._caipiHomeElemsP
                    .getResponseAfterPost()
                    .subscribe( res => this.readStatusAfterPost(res) );
    }

    readStatusAfterPost(res) {
      this.statusAfterPost = res;
    }

    onInitGetCaipiHomePages(n) {
      return this._caipiHomeService.getCaipiHomePages(n)
        .subscribe(
          (allPages) => {
            this._caipiHomePages = allPages;
            this.fullPageDimmer = false;
            console.warn('all pages are ' + allPages);
          },
          (error) => {
            this.errorMsg = <any>error;
            this.fullPageDimmer = false;
            alert("Error by taking data from the Server for this App Component " + this.errorMsg);

            setTimeout(()=> {
              this.goNextPage('/finder');
            }, 2000);

          },
          () => {
            this.ready(this._caipiHomePages[0]['name']);
            console.warn("complete on init get caipihome pages");
          }
        );
    }

		// action triggered when user swipes
    swipe(
      currentIndex: number,
      action = this.SWIPE_DIRECTION.RIGHT,
      pName: string
    ) {
      this.showAddDimmer = false;
      this.showEditDeleteDimmer = false;
    	// console.log("we should retrieve the info for the page "+this.thisPage + " at the first beginning");
      if (currentIndex > this._caipiHomePages.length || currentIndex < 0) { return; };

      this.nextIndex = 0;
    	// swipe right, next page
      if (action === this.SWIPE_DIRECTION.RIGHT) {
        const isLast = currentIndex === this._caipiHomePages.length - 1;
        this.nextIndex = isLast ? 0 : currentIndex + 1;

        if (isLast) {
          this.nextIndex = 0;
        } else {
          this.nextIndex = currentIndex + 1;
        }
        this.thisPage = this._caipiHomePages[this.nextIndex].name;
      }
    	// swipe left, previous page
      if ( action === this.SWIPE_DIRECTION.LEFT) {
        this.thisPage = pName;
        const isFirst = currentIndex === 0;
        this.nextIndex = isFirst ? this._caipiHomePages.length - 1 : currentIndex - 1;

      }
    	// toggle page visibility
      this._caipiHomePages.forEach(
        (x, i) => x['visible'] = (i === this.nextIndex)
      );
      this.takeElemsForPage(this.thisPage);
    }

    swipedUp(param: string) {

      this.showAddDimmer = !this.showAddDimmer;
      const pName = param;

      return this.showAddDimmer;
    }

    press(
      elem: Object
    ) {
      this.showEditDeleteDimmer = true;
      this.btnObj = elem;

      return this.showEditDeleteDimmer;
    }

    takeElemsForPage(name: string) {
      clearTimeout(this.timer);
      this._caipiHomeElemsP.getElemsThisPage(name)
          .subscribe(
            (elemThisPage) => {
              if (elemThisPage.length >= 0 ) {
                this._caipiHomeElems = elemThisPage;
              } else {
                console.log('we do not hane any elements');

                this._caipiHomeElems = [];
                this._caipiHomeElems.push(elemThisPage);

                console.log(this._caipiHomeElems);
              }
            },
            (error) => {
              this.errorMsg = <any>error;
              this.fullPageDimmer = false;

              alert("Error by taking elements for this page " + this.errorMsg);
              setTimeout(()=> {
                this.goNextPage('/finder');
              }, 2000);
            },
            () => this.startTimeOut(name) );
    }

    startTimeOut(name) {
      this.timer = setTimeout( () => {this.takeElemsForPage(name); }, this.timerDuration);
    }

    ready(page: string) {
      this.thisPage = page;
      this.takeElemsForPage(page);
    }

    sendUpdates(obj: string, type: string) {
      this._caipiHomeElemsP.postJSON(obj, type);
      // setTimeout(() => {this.onInitGetCaipiHomePages()},200);
      setTimeout(() => {this.takeElemsForPage(this.thisPage); }, 300);
    }

    returnSliderChanges(e) {
      console.log(e);
    }

    addNewElement(obj) {
      const count = Object.keys(obj).length;
      let typ: string;

      if (count === 2) {
        typ = 'addSite';
      } else {
        typ = 'add';
      }

      obj = JSON.stringify(obj);

      this._caipiHomeElemsP.postJSON(obj, typ);
        setTimeout(() => {
          if (this.statusAfterPost === 'success') {
            this.takeElemsForPage(this.thisPage);
            this.showAddDimmer = false;
          } else if (this.statusAfterPost === 'err') {
            alert(`Seems that the server encountered an internal error or misconfiguration !`);
          }
        }, 300);
    }

    editDeleteElementApp(obj){
      console.log(obj);
      const typ = 'newname';

      obj = JSON.stringify(obj);

      this._caipiHomeElemsP.postJSON(obj, typ);
        setTimeout(() => {
          if (this.statusAfterPost === 'success') {
            this.takeElemsForPage(this.thisPage);
            this.showAddDimmer = false;
          } else if (this.statusAfterPost === 'err') {
            alert(`Seems that the server encountered an internal error or misconfiguration !`);
          }
        }, 300);
    }

    goNextPage(page) {
      this.router.navigate([page]);
    }
}
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
