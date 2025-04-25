import { Component } from '@angular/core';

interface AttendanceEntry {
  date: string;
  checkIn: string;
  checkOut: string;
  presentOrAbsent: string;
  notes: string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  student = { studentName: 'Jack Jackson' };
}