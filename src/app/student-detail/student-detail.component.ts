import { Component, OnInit } from '@angular/core';
import { StudentService, AttendanceRecord, Student } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  attendanceLog: AttendanceRecord[] = [];
  studentId: number = 0;
  studentName: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    
    this.studentId = this.studentService.selectedStudentId;
    
    const student: Student = this.studentService.getStudentById(this.studentId);
    this.studentName = student.name;
    
    this.attendanceLog = this.studentService.getAttendance(this.studentId);
  }
}

