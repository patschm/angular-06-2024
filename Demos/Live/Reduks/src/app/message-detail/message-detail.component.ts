import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, messageActions } from '../app.module';

@Component({
  selector: 'app-message-detail',
  template: `
    <h2>{{message}}</h2>
    <input type="text" (input)="oninput(mb.value)" #mb />
    <button (click)="send()">Send</button>
  `,
  styles: ``
})
export class MessageDetailComponent {
  public message:string = "";

  public oninput(msg:string)
  {
    this.message = msg;
  }
  public send()
  {

    let msg = messageActions.add({berich:this.message});
    // let msg = {
    //   type: "[Message] add",
    //   payload: this.message
    // };
    this.store.dispatch(msg);
  }
  constructor(private store:Store<IAppState>)
  {

  }
}
