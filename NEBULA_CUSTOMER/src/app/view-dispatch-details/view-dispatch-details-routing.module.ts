import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDispatchDetailsPage } from './view-dispatch-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDispatchDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDispatchDetailsPageRoutingModule {}
