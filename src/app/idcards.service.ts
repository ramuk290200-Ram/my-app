import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  api = 'https://6128991386a213001729f9df.mockapi.io/test/v1/student';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(this.api);
  }
}