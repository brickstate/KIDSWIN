import { Component } from '@angular/core';

interface Milestone {
  ageInMonths: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent {
  birthDate: string = '';
  ageInMonths: number = 0;

  allMilestones: Milestone[] = [
    { ageInMonths: 12, description: "Walks with support", completed: false },
    { ageInMonths: 18, description: "Says several single words", completed: false },
    { ageInMonths: 24, description: "Begins to run", completed: false },
    { ageInMonths: 36, description: "Climbs well", completed: false },
    { ageInMonths: 48, description: "Can hop on one foot", completed: false },
    { ageInMonths: 60, description: "Can skip", completed: false }
  ];

  milestonesToShow: Milestone[] = [];

  updateAge(): void {
    if (!this.birthDate) return;

    const birth = new Date(this.birthDate);
    const today = new Date();
    const diffInMonths = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());

    this.ageInMonths = diffInMonths;
    this.filterMilestones();
  }

  filterMilestones(): void {
    this.milestonesToShow = this.allMilestones.filter(m => m.ageInMonths <= this.ageInMonths);
  }

  toggleCompleted(milestone: Milestone): void {
    milestone.completed = !milestone.completed;
  }
}
