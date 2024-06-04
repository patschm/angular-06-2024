import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef } from '@angular/core';
import { EMPTY, Observable, map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <ul>
      <li *ngFor="let b of brand$ | async">{{b.name}}</li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'Brands';
  public brand$: Observable<any[]> = EMPTY;

  constructor(public http:HttpClient, dr:DestroyRef)
  {
    this.brand$ = this.http.get<any[]>("https://localhost:5001/brands")
    .pipe(takeUntilDestroyed(dr)); // Hoeft niet. requester unsubscribet automatisch
  }
}
