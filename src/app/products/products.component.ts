import { Component } from '@angular/core';
import { ProductService } from '../prodct.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any = [];

  constructor(private product: ProductService) {
    product.getproducts().subscribe(
      (data: any) => {
        this.products = data;
      },

      (err: any) => {
        alert("internal server error");
      }
    )


  }
}
