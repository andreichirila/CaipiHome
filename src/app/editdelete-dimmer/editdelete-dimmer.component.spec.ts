/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditdeleteDimmerComponent } from './editdelete-dimmer.component';

describe('EditdeleteDimmerComponent', () => {
  let component: EditdeleteDimmerComponent;
  let fixture: ComponentFixture<EditdeleteDimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdeleteDimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeleteDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
