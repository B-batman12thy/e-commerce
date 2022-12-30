import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullComponentComponent } from './full-component/full-component.component';
import { AppRoutingModule } from '../app-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FullComponentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimengModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
