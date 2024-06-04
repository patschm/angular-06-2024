import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscriber, Subscription, concatMap, delay, exhaustMap, interval, map, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <button (click)="onclick()">Click Me</button>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription = Subscription.EMPTY;

  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.getal$
      .pipe(
        tap(n=>console.log(n)), 
        //concatMap(n=>this.longCall(n))
        //mergeMap(n=>this.longCall(n))
        //switchMap(n=>this.longCall(n))
        exhaustMap(n=>this.longCall(n))
      )
      .subscribe(v => {
         this.title = v;
      });
    // this.sub = this.getal$.subscribe(n => {
    //   this.longCall(n).subscribe(v => {
    //     this.title = v;
    //   });
    // });
  }

  
  public longCall(par: number) {
    let del = Math.random() * 1000;
    return of("From backend " + par).pipe(delay(2000 + del));
  }
  public title = 'Reactief';
  public getal$:Subject<number> = new BehaviorSubject(0);
  //public getal$ = interval(1000).pipe(tap(x => console.log(x)), map(x => x * 10));
  private nt: number = 0;
  public onclick() {
    this.getal$.next(this.nt++);
  }


}
