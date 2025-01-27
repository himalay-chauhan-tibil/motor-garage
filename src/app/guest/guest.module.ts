import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GuestRoutingModule } from './guest-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    JoinPageComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
