import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GuestRoutingModule } from './guest-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    JoinPageComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
