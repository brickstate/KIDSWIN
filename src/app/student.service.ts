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
  notes: string;
}

export interface DisciplineRecord {
  date: string;
  status: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudentId: number = 0;

  //disciplineData map for updating disciplineRecord
  private disciplineData: Map<number, DisciplineRecord[]> = new Map();

  constructor() { }


  getStudents(): Student[] {
    return [
      { id: 900323, name: 'Jack Jackson'},
      { id: 900347, name: 'Zachary Morris' },
      { id: 900382, name: 'Elizabeth Miller' },
      { id: 900211, name: 'Avi Lopez' },
      { id: 900335, name: 'Dylan Smith'}
    ];
  }

  getStudentById(id: number): (Student) {
    let students = this.getStudents();
    let aStudent = { id: 0, name: ''};

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
        { date: '4-14-2025', checkIn: '8:00 AM', checkOut: '2:15 PM', presentOrAbsent: 'Present', notes: "---" },
        { date: '4-15-2025', checkIn: '8:25 AM', checkOut: '2:20 PM', presentOrAbsent: 'Present', notes: "Arives late on Tuesdays." },
        { date: '4-16-2025', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent', notes: "---" }
      ];
    } else if (studentId === 900347) {
      return [
        { date: '4-14-2025', checkIn: '8:30 AM', checkOut: '2:10 PM', presentOrAbsent: 'Present', notes: "---" },
        { date: '4-15-2025', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent', notes: "---" },
        { date: '4-16-2025', checkIn: '8:45 AM', checkOut: '2:05 PM', presentOrAbsent: 'Present', notes: "---" }
      ];
    } else if (studentId === 900382) {
      return [
        { date: '4-14-2025', checkIn: '7:55 AM', checkOut: '2:00 PM', presentOrAbsent: 'Present', notes: "---" },
        { date: '4-15-2025', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent',  notes: "---" },
        { date: '4-16-2025', checkIn: '8:10 AM', checkOut: '2:10 PM', presentOrAbsent: 'Present', notes: "---" }
      ];
    } else if (studentId === 900211) {
      return [
        { date: '4-14-2025', checkIn: '8:00 AM', checkOut: '2:30 PM', presentOrAbsent: 'Present', notes: "---" },
        { date: '4-15-2025', checkIn: '8:22 AM', checkOut: '2:28 PM', presentOrAbsent: 'Present', notes: "Arives late on Tuesdays." },
        { date: '4-16-2025', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent',  notes: "---" }
      ];
    } else if (studentId === 900335) {
      return [
        { date: '4-14-2025', checkIn: '8:20 AM', checkOut: '2:05 PM', presentOrAbsent: 'Present', notes: "---" },
        { date: '4-15-2025', checkIn: '---', checkOut: '---', presentOrAbsent: 'Absent',  notes: "---" },
        { date: '4-16-2025', checkIn: '8:10 AM', checkOut: '2:00 PM', presentOrAbsent: 'Present', notes: "---" }
      ];
    } else {
      return [];
    }
  }

  getDiscipline(studentId: number): DisciplineRecord[] {

    if (this.disciplineData.has(studentId)) {
      return this.disciplineData.get(studentId)!;
    }

    let discipline: DisciplineRecord[] = [];

    if (studentId === 900323) {
      discipline = [
        { date: '4-14-2025', status:'Good', notes:'--'},
        { date: '4-15-2025', status:'Moderate', notes:'Talking during class'},
        { date: '4-16-2025', status:'--', notes:'--' }
      ];
    } else if (studentId === 900347) {
      discipline = [
        { date: '4-14-2025', status:'Good', notes:'--'},
        { date: '4-15-2025', status:'--', notes:'--'},
        { date: '4-16-2025', status:'Good', notes:'Great behavior today!' }
      ];
    } else if (studentId === 900382) {
      discipline = [
        { date: '4-14-2025', status:'Good', notes:'--' },
        { date: '4-15-2025', status:'--', notes:'--'},
        { date: '4-16-2025', status:'Bad', notes:'Punched a kid'}
      ];
    } else if (studentId === 900211) {
      discipline = [
        { date: '4-14-2025', status:'Good', notes:'--'},
        { date: '4-15-2025', status:'Moderate', notes:'--'},
        { date: '4-16-2025', status:'--', notes:'--'}
      ];
    } else if (studentId === 900335) {
      discipline = [
        { date: '4-14-2025', status:'Good', notes:'--'},
        { date: '4-15-2025', status:'--', notes:'--'},
        { date: '4-16-2025', status:'Good', notes:'--'}
      ];
    } 

    //Save to map
    this.disciplineData.set(studentId, discipline);
    return discipline;
  }

  updateDiscipline(studentId: number, updatedRecord: DisciplineRecord[]): void {
    this.disciplineData.set(studentId, updatedRecord)
  }
  
}