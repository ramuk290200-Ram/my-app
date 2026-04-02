import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { BrowserModule } from "@angular/platform-browser";
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle2',
  templateUrl: './vehicle2.component.html',
  styleUrls: ['./vehicle2.component.css'],
})
export class Vehicle2Component {
  term:string="";
  column:string="";
  order:string="";
  page:number= 1;

  vehicles: Vehicle[] = [];
  constructor(private vehicleService: VehicleService) {
    this.getVehiclesWithQueryParams();
      
  }
   getVehiclesWithQueryParams() {
    this.vehicleService.getVehiclesWithQueryParams(this.term,this.column,this.order,this.page).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },

      (err: any) => {
        alert("internal server error");
      }
    )
  }
  search(){
    this.getVehiclesWithQueryParams();
  }
  isAsc:boolean = false;
  sort(column:string){
    this,column = column;

    this.isAsc = !this.isAsc;
    this.order = this.isAsc?'asc':'desc';

    this.getVehiclesWithQueryParams();
  }
  pageVehicles(page:number){
    this.page = page;
    this.getVehiclesWithQueryParams();

  }
  
}
