import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ProductGroup } from 'src/app/entities';

// TODO: 8
// Import the ProductgroupService
import { ProductgroupService } from 'src/app/services/product-group.service';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups?: ProductGroup[];
  private dataSvc2:HttpClient;

  // TODO: 9
  // Inject the ProductgroupService
  constructor(private dataSvc: ProductgroupService) { 
    this.dataSvc2 = inject(HttpClient);
  }

  // TODO: 10
  // Call the productgroups() from the ProductgroupService and
  // assign the result to productGroups
  // Test the app
  ngOnInit(): void {
    this.dataSvc.productgroups$
      .subscribe(d => this.productGroups = d);
  }
}
