import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponentComponent } from './shared/full-component/full-component.component';

const routes: Routes = [
  {
    path:'',
    component:FullComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
