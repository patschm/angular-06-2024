import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-main></app-main>

    
  `,
  styles: []
})
export class AppComponent {
  title = 'Roeting';
}
