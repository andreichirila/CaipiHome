/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextElemComponent } from './text-elem.component';

describe('TextElemComponent', () => {
  let component: TextElemComponent;
  let fixture: ComponentFixture<TextElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
