import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';
import { Title } from '@angular/platform-browser';

import 'hammerjs';

import { NouisliderModule } from 'ng2-nouislider';
import { Ng2Webstorage } from 'ng2-webstorage';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SimplebtnComponent } from './simplebtn/simplebtn.component';
import { SliderbtnComponent } from './sliderbtn/sliderbtn.component';
import { TextElemComponent } from './text-elem/text-elem.component';
import { CaipihomeDimmerComponent } from './caipihome-dimmer/caipihome-dimmer.component';
import { ToastyModule } from 'ng2-toasty';

import { CaipiHomePagesService } from './app-services/caipi-home-pages.service';
import { CaipiHomeElemsService } from './app-services/caipi-home-elems.service';
import { FinderService } from './app-services/finder/finder.service';
import { NetstateService } from './app-services/netstate/netstate.service';
import { StorageService } from './app-services/storage.service';
import { MgwclientService } from './app-services/mgwclient/mgwclient.service';

import { SliderbtnDirective } from './app-directives/sliderbtn.directive';
import { SimplebtnDirective } from './app-directives/simplebtn.directive';

import { ResponsiveModule } from 'ng2-responsive';
import { FinderComponent } from './finder/finder.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { RemoteComponent } from './remote/remote.component';
import { EditdeleteDimmerComponent } from './editdelete-dimmer/editdelete-dimmer.component'; // ROUTING HERE!

@NgModule({
    declarations: [
      SliderbtnDirective,
      AppComponent,
      SimplebtnComponent,
      SliderbtnComponent,
      TextElemComponent,
      CaipihomeDimmerComponent,
      SimplebtnDirective,
      FinderComponent,
      RemoteComponent,
      EditdeleteDimmerComponent
    ],
    imports: [
      BrowserModule,
      NgSemanticModule,
      FormsModule,
      ToastyModule.forRoot(),
      HttpModule,
      L_SEMANTIC_UI_MODULE,
      NouisliderModule,
      ResponsiveModule,
      Ng2Webstorage.forRoot(),
      routing,
      MaterialModule
    ],
    providers: [
      MgwclientService,
      CaipiHomePagesService,
      CaipiHomeElemsService,
      FinderService,
      NetstateService,
      StorageService,
      Title
      ],
      bootstrap: [AppComponent]
      //bootstrap: [FinderComponent]
      //bootstrap: [RemoteComponent]
  })
export class AppModule { }

/*
export class CaipiHammerConfig extends HammerGestureConfig {
  events = ["swipeup","swiperight","swipeleft","swipedown"];
  overrides = <any>{
    'swipe': {
      velocity: 0.1,
      threshold: 0.1
    }
  }
}*/
