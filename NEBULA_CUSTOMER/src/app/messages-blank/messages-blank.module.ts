import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesBlankPageRoutingModule } from './messages-blank-routing.module';

import { MessagesBlankPage } from './messages-blank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesBlankPageRoutingModule
  ],
  declarations: [MessagesBlankPage]
})
export class MessagesBlankPageModule {}
