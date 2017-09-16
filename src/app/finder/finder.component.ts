import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

//import { AlertNotifierService } from '../shared/alert-notifier.service';
//import { StorageService } from '../shared/storage.service';
import { MgwclientService } from '../app-services/mgwclient/mgwclient.service';

import { FinderService } from '../app-services/finder/finder.service';
import { FinderData } from './finderdata';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})

export class FinderComponent implements OnInit, OnDestroy {
	finderstatus: string;
	devlist: FinderData[];
	FinderStateSubscription: Subscription;
	FinderDataSubscription: Subscription;
  private STEVE = './img/steve.jpg';

  constructor(
    public router: Router,
    private titleService: Title,
    private finder: FinderService,
    private mgwclient: MgwclientService
    //private storage: StorageService,
    //private alertNotifier: AlertNotifierService,
  ) {}

  ngOnInit() {
    this.finder.init();
    console.warn("In the ng on init from Finder");
    this.FinderStateSubscription = this.finder.eventstate
      .subscribe((state: number) => {
        switch (state) {
          case 1: this.finderstatus = 'Remoteaccess'; 
                  this.mgwclient.login();
                  break;
          case 2: this.finderstatus = 'Please register first in your local Network'; break;
          case 3: this.finderstatus = 'Main Central found'; break;
          case 4: this.finderstatus = 'Please choose your Main Device'; break;
          case 0:
          default: this.finderstatus = "searching for the Main Device..."; break;
        }
    });

    this.FinderDataSubscription = this.finder.eventdata
      .subscribe((devlist: FinderData[]) => {
        if(devlist){ this.devlist = devlist; }
        console.warn("Finder event data is" + this.devlist);
      });

    this.titleService.setTitle('Finder');
    //this.alertNotifier.reset();
    if(this.finder.inited){
          this.finder.setAccessMode("none");
          //this.finder.findCentral();
    }
  }

  goNextPage() {
    const navigationExtras: NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true
    };

    console.warn("Navigation extras are");

    console.warn(navigationExtras);

    //this.router.navigate(["/main"], navigationExtras);
    this.router.navigate(['/main']);

    console.warn("we should navigate to main");
	}

  setCentraleMac(idx: number){
		if(idx < 0){ return; }
		//alert("setCentraleMac: " + idx);
		//alert("setCentraleMac: " + this.devlist[idx].smac);
		//alert("setCentraleMac: " + this.devlist[idx].ip);

		this.finder.setCentralMac(this.devlist[idx].smac);
		this.finder.setCentralIpAddr(this.devlist[idx].ip);
		this.goNextPage();
	}

  ngOnDestroy(){
    this.FinderStateSubscription.unsubscribe();
    this.FinderDataSubscription.unsubscribe();
	}
}