import { Directive, HostBinding, HostListener, ElementRef, Input, Output, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
declare var $: any;

@Directive({
  selector: '[caipiSliderBtn]'/*
  host: {
    '(change)': 'onSliderChange()'
  }*/
})
export class SliderbtnDirective implements OnInit{
  selectedElem: any;

  @Input() infoSlider: any;
  @Input() val: string;

  constructor(private el: ElementRef,
              private appComp: AppComponent) {
    this.selectedElem = this.el.nativeElement;
  }

    ngOnInit(){
      console.log(this.infoSlider);
      delete this.infoSlider.pos;
      delete this.infoSlider.min;
      delete this.infoSlider.max;
    }
    
    onSliderChange(){
      this.infoSlider['value'] = `${this.val}`;

      console.log(this.infoSlider['value']);
      this.infoSlider = JSON.stringify(this.infoSlider || null );
      console.log(this.infoSlider);
      this.appComp.sendUpdates(this.infoSlider, 'slider');
    }

    prepareJSON(){
      this.infoSlider['value'] = this.val;
      this.infoSlider = JSON.stringify(this.infoSlider || null );
      
      console.log(this.infoSlider);
      this.appComp.sendUpdates(this.infoSlider, 'btn');
    }
}