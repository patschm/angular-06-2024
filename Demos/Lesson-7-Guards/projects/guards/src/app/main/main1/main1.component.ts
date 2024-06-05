import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-main1',
  template: `<h1>Main 1</h1>
  <input type="text" [value]="data"/>
  <h1>{{data}}</h1>`,
  styles: []
})
export class Main1Component implements OnInit 
{
  public data:string = "";

  constructor( private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.route.data.subscribe((obj:any)=>{
      this.data = obj.someData;
    });

    // this.route.data.subscribe((x:any)=>{
    //   this.data = x.someData;
    // });
    //this.svc.text.subscribe(x=>this.data = x);
  }
}
