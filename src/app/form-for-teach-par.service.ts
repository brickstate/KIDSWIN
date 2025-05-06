import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormForTeachParService {
  private formData: string = '';
  private formSubmitted = false;

  private formStatus: { [key: string]: { completed: boolean; completedDate?: string } } = {};

  constructor() {
    // Load from sessionStorage on init
    const storedData = sessionStorage.getItem('formData');
    if (storedData) {
      this.formData = storedData;
      this.formSubmitted = true;
    }

    const storedStatus = sessionStorage.getItem('formStatus');
    if (storedStatus) {
      this.formStatus = JSON.parse(storedStatus);
    }
  }

  // Save a simple string
  setForm(data: string) {
    this.formData = data;
    this.formSubmitted = true;
    sessionStorage.setItem('formData', data);
    sessionStorage.setItem('formSubmitted', 'true');
  }

  getForm(): string {
    return this.formData;
  }

  isSubmitted(): boolean {
    return this.formSubmitted;
  }

  // Save full form status (called by parent after submit)
  setFormStatus(status: { [key: string]: { completed: boolean; completedDate?: string } }) {
    this.formStatus = status;
    sessionStorage.setItem('formStatus', JSON.stringify(this.formStatus));
  }

  // Teacher view reads status
  getFormStatus(): { [key: string]: { completed: boolean; completedDate?: string } } {
    return this.formStatus;
  }

  isFormCompleted(formName: string): boolean {
    return this.formStatus[formName]?.completed ?? false;
  }

  getCompletionDate(formName: string): string | undefined {
    return this.formStatus[formName]?.completedDate;
  }
}
