import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) {

  }
 getproducts():Observable<any> {
    return this.httpclient.get('https://fakestoreapi.com/products');
  }
  
  }
