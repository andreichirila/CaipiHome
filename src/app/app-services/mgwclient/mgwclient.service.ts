import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';
import { FinderService } from '../finder/finder.service';
import { Subscription } from 'rxjs/Subscription';
import { NetstateService } from '../netstate/netstate.service';

declare var mgwclient: any;

@Injectable()
export class MgwclientService {
  private authstate: number = 0;
	public eventstate = new EventEmitter<number>();
  
  mgwclient: any;
  mgwclienttimer: any;

	NetstateSubscription: Subscription;

  constructor(
    private storage: StorageService,
    private netstate: NetstateService,
    private finder: FinderService
	) {
    this.init();
    this.NetstateSubscription = this.netstate.eventstate.subscribe((state: number) => {
        alert("The Network has changed. After pressing Ok Button wait few seconds !");
        if (this.mgwclient) {
            this.mgwclient.reconnect();
        }
      });
  }

  init() {
    this.mgwclienttimer = setInterval(() => {

      this.mgwclient = new mgwclient();
        if(this.mgwclient) {
          if(this.mgwclienttimer) { clearInterval(this.mgwclienttimer); }
            this.mgwclient.init();
            this.eventstate.emit(1);
        }
    }, 100);
  }

  login() {
    if (typeof this.mgwclient !== "undefined") {

      this.authstate = 0;
      let authtoken:boolean = true;

      if(authtoken) {

        this.mgwclient.login(['mmv@cameronet.com', 'mmv'],
          function(answer){
            console.warn("Login OK MMV");
          }, function(){
            console.warn("Login error MMV");
          }
        );

        this.mgwclienttimer = setInterval(() => {
          let authstate = this.mgwclient.getauthstate();
          if (authstate !== 0) {
            if(this.mgwclienttimer){ clearInterval(this.mgwclienttimer); }
              this.authstate = authstate;
              //alert(authstate + ' From MGWclient');
              this.eventstate.emit(authstate);
          }
        }, 200);
      }else{
        alert("no client token found"); 
        this.authstate = 3;
      }
    }
  }

  getAuthState() {
   return this.authstate;
  }

  onOnline(){
        alert("Mgw online");
  }

  onOffline(){
        //alert("offline");
  }

}