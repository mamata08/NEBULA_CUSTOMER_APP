import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOrderActivityPageRoutingModule } from './view-order-activity-routing.module';

import { ViewOrderActivityPage } from './view-order-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOrderActivityPageRoutingModule
  ],
  declarations: [ViewOrderActivityPage]
})
export class ViewOrderActivityPageModule {}
