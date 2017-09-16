import { Directive, HostBinding, HostListener, ElementRef, Input, Output, OnInit, AfterViewInit } from '@angular/core';

import { AppComponent } from '../app.component';

//declare var $: any;

@Directive({
  selector: '[caipiSimplebtn]',
  host : {
  	//'(click)':'prepareJSON()'
  	'(change)':'prepareJSON()'
  }
})
export class SimplebtnDirective{
	selectedElem: any;

	@Input() infoBtn: any;

	constructor(private el: ElementRef,
				private appComp: AppComponent)
	{
		this.selectedElem = this.el.nativeElement;
	}

		prepareJSON(){

			this.infoBtn['value'] = '0';
			this.infoBtn = JSON.stringify(this.infoBtn || null );
			console.log(this.infoBtn);
			this.appComp.sendUpdates(this.infoBtn, 'btn');
		}
}
