import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsBlankPage } from './news-blank.page';

const routes: Routes = [
  {
    path: '',
    component: NewsBlankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsBlankPageRoutingModule {}
