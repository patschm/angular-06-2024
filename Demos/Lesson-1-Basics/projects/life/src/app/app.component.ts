import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked {
  ngAfterContentInit(): void {
    console.log("After Content Init");
  }
  ngAfterViewInit(): void {
    console.log("After View Init");
  }
  ngAfterContentChecked(): void {
    console.log("After Content Checked");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
  }
  ngOnInit(): void {
    console.log("Om Init");
  }

  
  title = 'Life';
}
