import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarAdPageRoutingModule } from './car-ad-routing.module';

import { CarAdPage } from './car-ad.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarAdHeaderComponent } from './components/car-ad-header/car-ad-header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FeaturesListComponent } from './components/features-list/features-list.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarAdPageRoutingModule,
    SharedModule
  ],
  declarations: [CarAdPage, CarAdHeaderComponent, GalleryComponent, CarDetailsComponent, FeaturesListComponent, ActionButtonsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarAdPageModule { }
