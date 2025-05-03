import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService, Student} from '../student.service';

@Component({
  selector: 'app-disciplinary-status',
  templateUrl: './disciplinary-status.component.html',
  styleUrls: ['./disciplinary-status.component.css']
})
export class DisciplinaryStatusComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  
  //getStatus(id) ?

  //updateStatus(id, status) ?



}
