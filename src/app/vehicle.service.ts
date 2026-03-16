import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpclient:HttpClient) { }

  getVehicles():Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }


   pagedVehicles(page:number):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }


   deleteVehicle(id:string):Observable<any>{
    return this.httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    
  }

  
   filterVehicles(term:string):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
   } 
  sortVehicles(column:string,order:string):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }
   getVehiclesWithQueryParams(term:string,column:string,order:string,page:number):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term+"&sortBY="+column+"&order="+order+"&limit=10&page="+page);
   }
     createVehicle(vehicle:any):Observable<any>{
    return this.httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
   }
}

