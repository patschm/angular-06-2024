import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-message-detail></app-message-detail>
    <hr/>
    <app-message-list></app-message-list>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'Reduks';
}
