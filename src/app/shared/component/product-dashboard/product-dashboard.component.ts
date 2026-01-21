import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
products:Array<Iproduct> = [
  {
    name: 'Pen',
    price: 10,
    qty: 1
  },
  {
    name: 'Book',
    price: 50,
    qty: 2
  },
  {
    name: 'Notebook',
    price: 40,
    qty: 1
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
