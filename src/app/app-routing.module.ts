import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponentComponent } from './shared/full-component/full-component.component';

const routes: Routes = [
  {
    path:'',
    component:FullComponentComponent,
    children:[{
      path:'',
      pathMatch:'prefix',
      
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
