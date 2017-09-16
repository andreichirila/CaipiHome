/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaipihomeDimmerComponent } from './caipihome-dimmer.component';

describe('CaipihomeDimmerComponent', () => {
  let component: CaipihomeDimmerComponent;
  let fixture: ComponentFixture<CaipihomeDimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaipihomeDimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaipihomeDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
