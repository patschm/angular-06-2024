import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CommService } from './comm.service';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  exports:[ChildComponent, ParentComponent],
  imports: [
    CommonModule
  ]
  //providers:[{provide:CommService, useClass:CommService}]
  //providers:[CommService]
})
export class CommunicationModule { }
