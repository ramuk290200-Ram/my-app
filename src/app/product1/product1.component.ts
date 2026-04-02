import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component {
userForm:FormGroup = new FormGroup({
  title:new FormControl(),
  description:new FormControl(),
  category:new FormControl(),
  price:new FormControl(),
  discount:new FormControl(),
  rating:new FormControl(),
  stock:new FormControl(),
 
  
})

}
