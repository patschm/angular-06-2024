import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { LatestModule } from './latest/latest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //BasicModule,
    LatestModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
