import { Injectable, EventEmitter } from '@angular/core';

declare var netstate: any;

@Injectable()
export class NetstateService {
	private netstate: any;
	private netstatetimer: any;
	public eventstate = new EventEmitter<number>();

  constructor(){
    this.init();
  }

  init(){
    this.netstatetimer = setInterval(() => {
      this.netstate = new netstate();

      console.warn("this.netstate is next ...");
      console.warn(this.netstate);

      if(this.netstate){
        if(this.netstatetimer){
          clearInterval(this.netstatetimer);
        }

        this.netstate.init();
        this.netstatetimer = setInterval(() => {

          let state = this.netstate.getstate();
          if(state){ this.eventstate.emit(1); }
        }, 500);
      }
    }, 100);
  }
}
