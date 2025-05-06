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
    public router: Router
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  goToStudentDetail(id: number): void {
    this.studentService.selectedStudentId = id;
    //this.router.navigate(['/student-detail']);

    //helping nest the components with the routes for each dashboard view
    const basePath = this.router.url.includes('/admin/attendance')
    ? '/admin/attendance/student-detail'
    : this.router.url.includes('/parent/attendance')
      ? '/parent/attendance/student-detail'
      : '/student-detail'; // fallback if neither path matches

  this.router.navigate([basePath]);
  }
}
