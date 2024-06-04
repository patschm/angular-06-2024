import { Component, OnInit, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'signals';

  public a = signal(0);
  public b = signal(0);
  public sum = computed(()=>this.a() + this.b());
    
}



