import { Component } from '@angular/core';

@Component({
  selector: 'app-eerste',
  templateUrl: './eerste.component.html',
  styleUrls: ['./eerste.component.css']
})
export class EersteComponent {
  public text:string = 'Uit de component'

  public click():void{
    this.text = "Klik!!!";
  }
}
