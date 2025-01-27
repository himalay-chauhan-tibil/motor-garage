import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GuestRoutingModule } from './guest-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
