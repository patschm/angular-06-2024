import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EersteComponent } from './eerste/eerste.component';



@NgModule({
  declarations: [
    EersteComponent
  ],
  exports:[EersteComponent],
  imports: [
    CommonModule
  ]
})
export class FirstModule { }
