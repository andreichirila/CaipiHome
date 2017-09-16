import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StorageService } from '../storage.service';
import { FinderData } from './finderdata';
import { NetstateService } from '../netstate/netstate.service';
import { Subscription } from 'rxjs/Subscription';

declare var finder: any;

@Injectable()
export class FinderService {
  finder: any;
  findertimer: any;
  findertimer1: any;
  inited: number = 0;
  devlist: FinderData[];
  NetstateSubscription: Subscription;
  called: number = 0;

  public eventstate = new EventEmitter<number>();
  public eventdata = new EventEmitter<FinderData[]>();
  private CentralIpAddr: string;
  private AccessMode: string;

  constructor(
    public router: Router,
    private storage: StorageService,
    private netstate: NetstateService
  ) {

    console.warn(this.storage);
    console.warn("Constructor from Finder");

    this.NetstateSubscription = this.netstate.eventstate.subscribe((state: number) => {
      console.warn("Network change event !");
      this.findCentral();
    });
  }

  init() {
    //alert("Init Finder");
    this.findertimer = setInterval(() => {
      this.finder = new finder();
      this.called++;

        if (this.finder) {
          if (this.findertimer) {
            clearInterval(this.findertimer);
            console.warn("The Finder is searching for Main Devices");
          }

          this.inited = 1;
          this.finder.init();
          //alert("we already called  this.finder.init");
          this.findCentral();
        }
    }, 200);
  }

  setAccessMode(mode) {
    this.AccessMode = mode;
  }


  findCentral() {

    console.warn('Finding ...');

    this.eventstate.emit(0);
    this.finder.sendIdent();
    this.storage.clear('ApiHost');

    setTimeout(() => {
      let devlist = this.finder._getDeviceList();
    }, 1000);

    this.findertimer1 = setInterval(() => { this.extractDevList(); }, 300);
  }

  extractDevList() {
    let devlist : string = this.finder.getDeviceList();
    let changepage = 1;
      if (devlist !== null) {
        this.devlist = JSON.parse(devlist);

        //we clear the interval in case we have a list with devices

        clearInterval(this.findertimer1);

        if (this.devlist) {
          if (this.devlist.length === 1) {
            if ((this.devlist[0].name === 'remoteaccess') && (this.devlist[0].ip === '127.0.0.1')) {

                let centralmac: string = this.finder.getCentralMac();
                let remoteaddr: string = '127.0.0.1:5555';

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

                } else {
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
            } else {

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
          } else {

            let centralmac: string = this.finder.getCentralMac();
            for (let dev of this.devlist){
              if(centralmac == dev.smac) {
                if(this.AccessMode === 'local'){
                  changepage = 0;
                  console.warn("we have more Centrals and Access Mode is local");
                }
                this.storage.store('ApiHost', dev.ip);
                console.warn(this.storage.store('ApiHost', dev.ip));

                this.storage.store('AccessMode', 'local');
                this.setCentralIpAddr(dev.ip);
                this.AccessMode = "local";

                //if(changepage){
                if(changepage){
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
  }

  setCentralMac(smac:string){
  	this.finder.setCentralMac(smac);
  }

  getCentralMac(){
  	return this.finder.getCentralMac();
  }

  removeCentralMac(){
  	this.finder.removeCentralMac();
  }

  setCentralIpAddr(ipaddr:string){
	this.CentralIpAddr = ipaddr;
        this.storage.store('ApiHost', ipaddr);
  }

  getCentralIpAddr(){
	return this.CentralIpAddr;
  }

  getAccessMode(){
	return this.AccessMode;
  }

  goNextPage(page){
    let navigationExtras: NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true
    };
    this.router.navigate([page], navigationExtras);
  }
}
