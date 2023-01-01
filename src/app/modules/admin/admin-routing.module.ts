import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = 
[
  {
   path: '',
    component: AdminComponent 
  },
  {
    path:'produits',
    component:ProduitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
