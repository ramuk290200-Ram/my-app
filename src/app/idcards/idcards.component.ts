import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  students:any[] = [];

  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data:any)=>{
      this.students = data;
    })
  }

}
