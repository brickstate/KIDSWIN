import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})

export class DisciplineComponent{
  @Input() disciplineLog: any[] = [];
  @Input() studentName: string = '';
  @Input() studentId!: number;
  isAdmin: boolean = false;
  isEditing: boolean = false;

  constructor(public router: Router, private studentService: StudentService){
    this.isAdmin = this.router.url.includes('admin');
    console.log(this.isAdmin);
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
  }

  saveDisciplineLog(): void {
    this.studentService.updateDiscipline(this.studentId, this.disciplineLog);
    this.isEditing = false;
    alert('Update saved.');
  }



  

}
