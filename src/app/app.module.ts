import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/accueil/accueil.component';
import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent,
        AccueilComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        PrimengModule
    ]
})
export class AppModule { }
