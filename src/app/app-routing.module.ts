import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TareaModule } from './tarea/tarea.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductStoreComponent } from './product/product-store/product-store.component';

const routes: Routes = [
  { 
    path: 'tarea', loadChildren: () => import('./tarea/tarea.module').then(m => m.TareaModule), 
  },
  //{ path: 'tarea', component: TareaModule },
  { path: 'landing', component: LandingComponent},
  { path: 'product', component: ProductStoreComponent ,
    children: [
      { path: 'detail/:id', component: ProductDetailComponent}
    ]
   },   
  { path: '',   redirectTo: 'landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
