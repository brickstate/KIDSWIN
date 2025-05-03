import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
}

export interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  presentOrAbsent: string;
  disciplineStatus: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudentId: number = 0;

  constructor() { }

  getStudents(): Student[] {
    return [
      { id: 900323, name: 'Jack Jackson'},
      { id: 900347, name: 'Zachary Morris' },
      { id: 900211, name: 'Avi Lopez' },
      { id: 900382, name: 'Elizabeth Miller' },
      { id: 900335, name: 'Dylan Smith'}
    ];
  }

  getStudentById(id: number): (Student) {
    let students = this.getStudents();
    let aStudent = { id: 0, name: 'Unknown', isPresent: false };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        return students[i];
      }
    }

    return aStudent;
  }  

  getAttendance(studentId: number): AttendanceRecord[] {
    if (studentId === 900323) {
      return [
        { date: '2025-04-14', checkIn: '8:00 AM', checkOut: '2:15 PM', presentOrAbsent: 'Present', disciplineStatus: 'Good', notes: "---" },
        { date: '2025-04-15', checkIn: '8:05 AM', checkOut: '2:20 PM', presentOrAbsent: 'Present', disciplineStatus: 'Good', notes: "---" },
        { date: '2025-04-16', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent', disciplineStatus: 'Moderate', notes: "---" }
      ];
    } else if (studentId === 900347) {
      return [
        { date: '2025-04-14', checkIn: '8:30 AM', checkOut: '2:10 PM', presentOrAbsent: 'Present', disciplineStatus: 'Moderate', notes: "---" },
        { date: '2025-04-15', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent', disciplineStatus: 'Moderate', notes: "---" },
        { date: '2025-04-16', checkIn: '8:45 AM', checkOut: '2:05 PM', presentOrAbsent: 'Present', disciplineStatus: 'Bad', notes: "---" }
      ];
    } else if (studentId === 900211) {
      return [
        { date: '2025-04-14', checkIn: '7:55 AM', checkOut: '2:00 PM', presentOrAbsent: 'Present', disciplineStatus: 'Good', notes: "---" },
        { date: '2025-04-16', checkIn: '8:10 AM', checkOut: '2:10 PM', presentOrAbsent: 'Present', disciplineStatus: 'Good', notes: "---" }
      ];
    } else if (studentId === 900382) {
      return [
        { date: '2025-04-14', checkIn: '8:00 AM', checkOut: '2:30 PM', presentOrAbsent: 'Present', disciplineStatus: 'Bad', notes: "---" },
        { date: '2025-04-15', checkIn: '8:02 AM', checkOut: '2:28 PM', presentOrAbsent: 'Present', disciplineStatus: 'Bad', notes: "---" },
        { date: '2025-04-16', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent', disciplineStatus: 'Bad', notes: "---" }
      ];
    } else if (studentId === 900335) {
      return [
        { date: '2025-04-14', checkIn: '8:20 AM', checkOut: '2:05 PM', presentOrAbsent: 'Present', disciplineStatus: 'Moderate', notes: "---" },
        { date: '2025-04-15', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent', disciplineStatus: 'Moderate', notes: "---" },
        { date: '2025-04-16', checkIn: '8:10 AM', checkOut: '2:00 PM', presentOrAbsent: 'Present', disciplineStatus: 'Moderate', notes: "---" }
      ];
    } else {
      return [];
    }
  }
  
}