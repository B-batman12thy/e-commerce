import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    TabMenuModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    
  ]
})
export class PrimengModule { }
