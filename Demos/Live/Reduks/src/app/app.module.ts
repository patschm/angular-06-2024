import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { StoreModule, createActionGroup, createReducer, on, props } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools'

export interface IAppState
{
  msgs:string[]
}

export const messageActions = createActionGroup({
  source:"Message",
  events:{
    "add":props<{berich:string}>()
  }
}
);

export const init:string[]=[];
export const messageSelector = (st:IAppState)=>st.msgs;

export const messageReducer = createReducer(
  init,
  on(messageActions.add, (oldstate, action)=>{
      return [...oldstate, action.berich];
  })
)

// function msgsReducer(oldState: any = [], action: any) {
//   if (action.type == "[Message] add") {
//     return [...oldState, action.payload];
//   }
//   return oldState;
// }

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ msgs: messageReducer }),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
