import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesBlankPage } from './messages-blank.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesBlankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesBlankPageRoutingModule {}
