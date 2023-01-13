import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'new-order',
    loadChildren: () => import('./new-order/new-order.module').then( m => m.NewOrderPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'news-blank',
    loadChildren: () => import('./news-blank/news-blank.module').then( m => m.NewsBlankPageModule)
  },
  {
    path: 'messages-blank',
    loadChildren: () => import('./messages-blank/messages-blank.module').then( m => m.MessagesBlankPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'confirm-order',
    loadChildren: () => import('./confirm-order/confirm-order.module').then( m => m.ConfirmOrderPageModule)
  },
  {
    path: 'collect-payment',
    loadChildren: () => import('./collect-payment/collect-payment.module').then( m => m.CollectPaymentPageModule)
  },
  {
    path: 'news-updated',
    loadChildren: () => import('./news-updated/news-updated.module').then( m => m.NewsUpdatedPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'view-order',
    loadChildren: () => import('./view-order/view-order.module').then( m => m.ViewOrderPageModule)
  },
  {
    path: 'view-order-dispatch',
    loadChildren: () => import('./view-order-dispatch/view-order-dispatch.module').then( m => m.ViewOrderDispatchPageModule)
  },
  {
    path: 'view-dispatch-details',
    loadChildren: () => import('./view-dispatch-details/view-dispatch-details.module').then( m => m.ViewDispatchDetailsPageModule)
  },
  {
    path: 'view-order-activity',
    loadChildren: () => import('./view-order-activity/view-order-activity.module').then( m => m.ViewOrderActivityPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
