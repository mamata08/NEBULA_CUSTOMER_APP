import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsBlankPageRoutingModule } from './news-blank-routing.module';

import { NewsBlankPage } from './news-blank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsBlankPageRoutingModule
  ],
  declarations: [NewsBlankPage]
})
export class NewsBlankPageModule {}
