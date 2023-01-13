import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDispatchDetailsPageRoutingModule } from './view-dispatch-details-routing.module';

import { ViewDispatchDetailsPage } from './view-dispatch-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDispatchDetailsPageRoutingModule
  ],
  declarations: [ViewDispatchDetailsPage]
})
export class ViewDispatchDetailsPageModule {}
