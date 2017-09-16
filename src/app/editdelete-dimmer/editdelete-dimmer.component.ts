import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-editdelete-dimmer',
  templateUrl: './editdelete-dimmer.component.html',
  styleUrls: ['./editdelete-dimmer.component.css']
})
export class EditdeleteDimmerComponent implements OnChanges {
	private elemType: string;
	private obj: any;
	private elemName: string;
	private pageName: string;
	private title: string;
	private editField: boolean;

	@Input() fromComponent: boolean;
	@Input() infoPage: any;
	@Input() btnType: any;

	@Output() editDelElement = new EventEmitter<Object>();

	@ViewChild('bottomSidebar') bottomSidebar: any;
  @ViewChild('caipiModal') caipiModal: any;

  	TITLES = [
		{ action: `Are you sure you want to delete this Element ?`} ,
		{ action: `Give please the new name for this Element ` },
		{ action: `Are you sure you want to delete this Page ? All the elements from this page will be deleted too !` }
	];

	constructor() { }

	ngOnChanges() {

		console.log(this.btnType);

		if(this.btnType !== undefined){
			//console.log(this.btnType);
			this.elemName = this.btnType.name;
			this.pageName = this.btnType.page;

			console.log(this.elemName);
			console.log(this.pageName);
		}

		if (this.fromComponent === true) {
			this.showDimmer();
		}else if (this.fromComponent === false) {
			this.hideDimmer();
			this.hideModal();
		}
    }

	editDeleteElement(edited) {

		this.obj = this.btnType;
		this.obj['old'] = this.btnType.name;
		this.obj['changed'] = edited;

		if(this.obj['old'] === this.obj['changed']) {
			alert("Sorry, you should give another name than the precedence !");

			return;
		}

		delete this.obj.name;
		delete this.obj.status;

		this.editDelElement.emit(this.obj);
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

	showModal(typ) {
      (typ == 1) ? this.editField = true : this.editField = false;

      this.title = this.TITLES[typ].action;

      console.log(this.title);
      this.caipiModal.show();
    }

    hideModal() {
      this.caipiModal.hide();
    }
}
