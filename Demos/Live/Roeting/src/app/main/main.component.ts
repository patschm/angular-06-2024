import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [".active { 'background-color':'red'}"]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
