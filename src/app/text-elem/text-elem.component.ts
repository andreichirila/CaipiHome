import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-elem',
  templateUrl: './text-elem.component.html',
  styleUrls: ['./text-elem.component.css'],
  inputs: ['nameText','message']
})
export class TextElemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
