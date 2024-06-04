import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FirstModule } from "./first/first.module";

@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule, FirstModule],
  bootstrap:[AppComponent]
})
export class AppModule { }
