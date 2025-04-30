import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  goToStudentDetail(id: number): void {
    this.studentService.selectedStudentId = id;
    this.router.navigate(['/student-detail']);
  }
}
