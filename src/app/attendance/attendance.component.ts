import { Component } from '@angular/core';

interface attendance {
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
  student = { studentName: '[student]' };
  
  attendanceLog: attendance[] = [
    { date: '2025-04-14', checkIn: '8:00 AM', checkOut: '2:15 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-15', checkIn: '8:00 AM', checkOut: '2:16 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-16', checkIn: '8:17 AM', checkOut: '2:15 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-17', checkIn: '8:00 AM', checkOut: '2:17 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-18', checkIn: '---',   checkOut: '---',     presentOrAbsent: 'Absent',  notes: "---"},
    { date: '2025-04-21', checkIn: '8:00 AM', checkOut: '2:15 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-22', checkIn: '8:00 AM', checkOut: '2:14 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-23', checkIn: '8:14 AM', checkOut: '2:15 PM', presentOrAbsent: 'Present', notes: "---"},
    { date: '2025-04-24', checkIn: '---',   checkOut: '---',     presentOrAbsent: 'Absent',  notes: "---"}
  ];
}
