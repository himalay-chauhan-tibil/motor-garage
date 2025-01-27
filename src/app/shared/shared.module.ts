import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CommonButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonButtonComponent
  ]
})
export class SharedModule { }
