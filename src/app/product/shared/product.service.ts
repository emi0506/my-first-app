import { Observable } from 'rxjs';
import { products } from 'src/app/product';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    // return products
    return this.http.get('/api/v1/products')
  }

  getProductById(productId:string):Observable<any>{
    // return products[productId]
    // debugger
    return this.http.get('/api/v1/products/' + productId)
  }
}
