import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  @Input("naam")
  public name:string = "";

  @Output()
  public modified: EventEmitter<string> = new EventEmitter();

  public onInput(arg:any)
  {
      this.name = arg.target.value;
      this.modified.emit(this.name);
      this.comsvc.Data = this.name;
  }
  constructor(public comsvc:CommService) { }

  ngOnInit() {
  }

}
