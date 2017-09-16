import { Component, OnInit, ElementRef, Input, Output, OnChanges, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caipihome-dimmer',
  templateUrl: './caipihome-dimmer.component.html',
  styleUrls: ['./caipihome-dimmer.component.css']
})
export class CaipihomeDimmerComponent implements OnChanges {
  private caipiDimmer: ElementRef;
  private elemType: string;
  public simple: any;
  public btnType = 'simple button';
  public obj: Object;

  @Input() fromComponent: boolean;
  @Input() infoPage: any;
  @Input() caipiShowDimmer: any;

  @Output() newElement = new EventEmitter<Object>();

  @ViewChild('bottomSidebar') bottomSidebar: any;
  @ViewChild('caipiModal') caipiModal: any;

  constructor(private el: ElementRef) {
    this.caipiDimmer = this.el.nativeElement;
  }

    ngOnChanges() {
      console.log('on changes dimmer is ' + this.fromComponent);
      console.log('on changes dimmer is on page' + this.infoPage);

      if (this.fromComponent === true) {
        this.showDimmer();
      }else if (this.fromComponent === false) {
        this.hideDimmer();
        this.hideModal();
      }
    }

    postNewElement(o) {
      this.obj = o;
      this.newElement.emit(this.obj);
    }

    showDimmer() {
      this.bottomSidebar.show({
        opacity: .7,
        transition: 'overlay'
      });
    }

    hideDimmer() {
      this.bottomSidebar.hide();
    }

    addElement(val) {

      if ((val === undefined) || (val === '')) { alert('Please give a name for the new element'); return; };
        console.log(val);
        const obj = this.prepareJSON(val);
        this.postNewElement(obj);
        this.simple = '';
    }

    showModal(typ) {
      this.elemType = typ;
      this.caipiModal.show();
    }

    hideModal() {
      this.caipiModal.hide();
    }

    prepareJSON(val) {
      const obj = {};

      if (this.elemType === 'page') {
        if (val === this.infoPage) {
          alert('Sorry but you already named this Page with this name ! Please choose another one');
          return false;
        }
        obj["name"] = val;
        obj["data-prev"] = this.infoPage;
      } else {
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
    }
}
