import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullComponentComponent } from './full-component/full-component.component';
import { AppRoutingModule } from '../app-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { TabMenuModule } from 'primeng/tabmenu';



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
    TabMenuModule
  ]
})
export class SharedModule { }
