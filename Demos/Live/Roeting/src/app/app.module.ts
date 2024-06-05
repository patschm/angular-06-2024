import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes:Routes = [
  {
    path:'main1',
    component: Main1Component
  },
  {
    path:'main2/:nr',
    component:Main2Component
  },
  {
    path:'main3',
    component:Main3Component
  },
  {
    path:'sub',
    loadChildren:()=>import('./sub/sub.module').then(m=>m.SubModule)
  },
  {
    path:'',
    redirectTo:'/main1',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotfoundComponent
  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    Main1Component,
    Main2Component,
    Main3Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
