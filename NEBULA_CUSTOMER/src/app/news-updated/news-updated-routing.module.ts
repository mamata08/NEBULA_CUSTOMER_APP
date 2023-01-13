import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsUpdatedPage } from './news-updated.page';

const routes: Routes = [
  {
    path: '',
    component: NewsUpdatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsUpdatedPageRoutingModule {}
