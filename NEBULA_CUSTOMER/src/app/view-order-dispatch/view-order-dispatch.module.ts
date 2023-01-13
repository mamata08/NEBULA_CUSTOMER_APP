import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOrderDispatchPageRoutingModule } from './view-order-dispatch-routing.module';

import { ViewOrderDispatchPage } from './view-order-dispatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOrderDispatchPageRoutingModule
  ],
  declarations: [ViewOrderDispatchPage]
})
export class ViewOrderDispatchPageModule {}
