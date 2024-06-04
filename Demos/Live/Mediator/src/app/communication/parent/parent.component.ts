import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit 
{
  public someName:string = "";
  public childName:string = "ok";

  public onChangeParent(arg:any)
  {
    this.someName = arg.target.value;
    this.comsvc.Data = this.someName;
    
  }
  public onChildChange(arg:any)
  {
      this.childName = arg;
  }
  
  constructor(public comsvc: CommService) { }

  ngOnInit() {
  }

}
