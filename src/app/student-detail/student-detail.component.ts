import { Component, OnInit } from '@angular/core';
import { StudentService, AttendanceRecord, Student, DisciplineRecord } from '../student.service';
import { AuthService } from '../loginStuff/auth.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  attendanceLog: AttendanceRecord[] = [];
  disciplineLog: DisciplineRecord[] = [];

  studentId: number = 0;
  studentName: string = '';
  loggedInAdmin: boolean = false;

  constructor(
    private studentService: StudentService, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    
    this.loggedInAdmin = this.authService.loggedInAdmin();
    
    this.studentId = this.studentService.selectedStudentId;
    
    const student: Student = this.studentService.getStudentById(this.studentId);
    this.studentName = student.name;
    
    this.attendanceLog = this.studentService.getAttendance(this.studentId);

    this.disciplineLog = this.studentService.getDiscipline(this.studentId);

  }
}

