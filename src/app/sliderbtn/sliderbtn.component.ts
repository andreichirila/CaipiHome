import { Component, Input, OnInit, AfterViewInit, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sliderbtn',
  templateUrl: './sliderbtn.component.html',
  styleUrls: ['./sliderbtn.component.css'],
  inputs: ['nameSlider','sliderInfo']
})
export class SliderbtnComponent implements OnInit{
	nameBtn: string;
	checked: boolean;
	selectedElem: any;
	completeInfo: any;

	@Input() sliderInfo: any;
	@Input() value: number;
	@ViewChild('ref') mdSlider: any;

	constructor(private el: ElementRef,
              	private appComp: AppComponent) {
		this.selectedElem = this.el.nativeElement;
	}

	ngOnInit() {
		this.nameBtn = this.sliderInfo.name;
		this.value = this.sliderInfo.value;
		this.checked = (this.sliderInfo.status === '1') ? true : false;
	}

	onSliderChange(v,info){
		let valObj = info;
		this.rmGarbageFromJorg(valObj);
    		valObj['value'] = v.toString();
    		console.log(valObj);
		/*console.dir(this.selectedElem);
		console.dir(this.mdSlider);
		console.log(v);
		console.log(info);*/


      this.completeInfo = JSON.stringify(valObj || null );
      console.log(this.completeInfo);
      this.appComp.sendUpdates(this.completeInfo, 'slider');
    }

    rmGarbageFromJorg(obj){

    	delete obj.pos;
      	delete obj.min;
      	delete obj.max;

      	return obj;
    }
}
