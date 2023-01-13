import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOrderActivityPage } from './view-order-activity.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOrderActivityPageRoutingModule {}
