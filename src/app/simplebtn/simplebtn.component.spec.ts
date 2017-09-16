/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimplebtnComponent } from './simplebtn.component';

describe('SimplebtnComponent', () => {
  let component: SimplebtnComponent;
  let fixture: ComponentFixture<SimplebtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplebtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
