import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { StoresDetailsComponent } from './pages/stores-details/stores-details.component';
import { StoresComponent } from './pages/stores/stores.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path:'stores',component:StoresComponent
  },
  {
    path:'user',component:UsersComponent
  },
  {
    path:'home/login',component:LoginComponent
  },
  {
    path:'home/cart',component:CartComponent
  },
  {
    path:'stores-detail',component:StoresDetailsComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
