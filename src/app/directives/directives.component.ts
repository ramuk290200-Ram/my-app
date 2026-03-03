import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
 
  cities:string[] = ["hyd", "bang","vij", "delhi"];

products: any = [
  {name:'pen', price:20},
   {name: 'phone', price:30000},
    {name:'shirt', price:1500},
     {name:'laptop', price:50000},
]

isValid:boolean = true;


}
