/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderbtnComponent } from './sliderbtn.component';

describe('SliderbtnComponent', () => {
  let component: SliderbtnComponent;
  let fixture: ComponentFixture<SliderbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
