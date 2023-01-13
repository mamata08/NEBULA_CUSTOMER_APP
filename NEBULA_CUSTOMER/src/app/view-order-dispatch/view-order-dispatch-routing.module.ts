import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOrderDispatchPage } from './view-order-dispatch.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderDispatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOrderDispatchPageRoutingModule {}
