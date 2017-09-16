import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { FinderService } from '../app-services/finder/finder.service';
import { MgwclientService } from '../app-services/mgwclient/mgwclient.service';
import { StorageService } from '../app-services/storage.service';

@Component({
  selector: 'remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})

export class RemoteComponent implements OnInit, OnDestroy {

	status:string = null;
	mgwtimer: any = null;
	MgwclientStateSubscription: Subscription;

  public constructor(
    public router: Router,
    private titleService: Title,
    private finder: FinderService,
    private mgwclient: MgwclientService,
    private storage: StorageService
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Remote Access');
    this.status = 'Login...';

    if (this.finder.getAccessMode() === 'none') {
      this.status = "No Central Device have been found. Please go first in your local Network.";
    } else {

      this.MgwclientStateSubscription = this.mgwclient.eventstate
          .subscribe((state: number) => {
            switch (state) {
              case 1: console.warn("state is 1");
                      this.goNextPage('/finder');
                      this.status = 'MGW Client is instantiated';
                      break;
              case 2: this.goNextPage('/main');
                      this.status = 'MGW Client is sending a state ' + state + '. We will go on the Finder Page';
                      console.warn('state is 2');
                      break;
              case 3: //this.goNextPage(['/main']);
                      this.status = 'state is 3';
                      alert("ERROR");
                      break;
              default: this.status = "No state until now from MGW-Client";
                       console.warn("state is default");
                       break;
            }
          });
    }
  }

  goNextPage(page){
    let navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
    };

    this.router.navigate([page], navigationExtras);
  }

  ngOnDestroy() {}

}


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
