import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
   baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private httpclient:HttpClient) { }

  getVehicles():Observable<Vehicle[]>{
    return this.httpclient.get<Vehicle[]>(this.baseUrl+"?limit=10&page=1");
  }
   getVehicle(id:string):Observable<Vehicle>{
    return this.httpclient.get<Vehicle>(this.baseUrl+"/"+id);
  }


   pagedVehicles(page:number):Observable<Vehicle[]>{
    return this.httpclient.get<Vehicle[]>(this.baseUrl+"?limit=10&page="+page);
  }


   deleteVehicle(id:string):Observable<Vehicle>{
    return this.httpclient.delete<Vehicle>(this.baseUrl+"/"+id);
    
  }

  
   filterVehicles(term:string):Observable<Vehicle[]>{
    return this.httpclient.get<Vehicle[]>(this.baseUrl+"?filter="+term);
   } 
  sortVehicles(column:string,order:string):Observable<Vehicle[]>{
    return this.httpclient.get<Vehicle[]>(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
   getVehiclesWithQueryParams(term:string,column:string,order:string,page:number):Observable<Vehicle[]>{
    return this.httpclient.get<Vehicle[]>(this.baseUrl+"?filter="+term+"&sortBY="+column+"&order="+order+"&limit=10&page="+page);
   }
     createVehicle(vehicle:any):Observable<Vehicle>{
    return this.httpclient.post<Vehicle>(this.baseUrl+"",vehicle);
   }
      editVehicle(id:string,vehicle:any):Observable<Vehicle>{
    return this.httpclient.post<Vehicle>(this.baseUrl+"/"+id,vehicle);
   }
}

