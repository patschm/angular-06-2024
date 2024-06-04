import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { IAppState, messageSelector } from '../app.module';

@Component({
  selector: 'app-message-list',
  template: `
    <ul>
      <li *ngFor="let msg of messages$ | async">{{msg}}</li>
    </ul>
  `,
  styles: ``
})
export class MessageListComponent {
  public messages$:Observable<string[]> = EMPTY;

  constructor(public store:Store<IAppState>)
  {
    this.messages$ = this.store.select(messageSelector);
  }
}
