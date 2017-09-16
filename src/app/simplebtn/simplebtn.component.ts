import { Component, Input, OnInit, AfterViewChecked, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-simplebtn',
  templateUrl: './simplebtn.component.html',
  styleUrls: ['./simplebtn.component.css']
})
export class SimplebtnComponent implements OnInit {
	nameBtn: string;
	checked: boolean;

	HAMMER_EVENTS = {
		PRESS: "press"
	}

	@Input() btnInfo: any;

	press(btnInfo, elem, pName){
		console.log(btnInfo);
	}
	
	constructor() { }

	ngOnInit() {
		this.nameBtn = this.btnInfo.name;
		this.checked = (this.btnInfo.status === '1') ? true : false;
	}

}
