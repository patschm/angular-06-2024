import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/entities';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  // TODO: 2 Declare a field reviewForm of type FormGroup
  
  public _review: Review = new Review();
  public submitted = false;

  public onSubmit() {
      this.submitted = true;
      // TODO: 4 Assign values from reviewForm to _review.

      console.log(this._review);
  }
  // TODO: 3 Inject the FormBuilder and build the reviewForm with the fields:
  //         - score (min:0, max:5, required)
  //         - author (required)
  //         - text (required)
  constructor() { 
   
  }

  public get review():any {
    let map = new Map();
    // for(let x in this.reviewForm.controls)
    // {
    //     map.set(x, this.reviewForm.get(x));
    // }
    return Object.fromEntries(map);
  } 

  ngOnInit(): void {
  }
}

