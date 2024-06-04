import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-parent></app-parent>
    <hr/>
    <app-child></app-child>

  `,
  styles: []
})
export class AppComponent {
  title = 'Mediator';
}
