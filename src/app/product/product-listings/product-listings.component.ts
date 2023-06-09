import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../product';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})

export class ProductListComponent implements OnInit{

  products: any;

  constructor(private route: ActivatedRoute,){ }

  ngOnInit(){
    this.products = products;
  }
}
