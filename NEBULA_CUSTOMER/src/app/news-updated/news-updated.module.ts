import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsUpdatedPageRoutingModule } from './news-updated-routing.module';

import { NewsUpdatedPage } from './news-updated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsUpdatedPageRoutingModule
  ],
  declarations: [NewsUpdatedPage]
})
export class NewsUpdatedPageModule {}
