import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormForTeachParService } from '../form-for-teach-par.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  federalForm!: FormGroup;
  stateForm!: FormGroup;
  countyForm!: FormGroup;
  centerForm!: FormGroup;

  formStatus: { [key: string]: { completed: boolean; completedDate?: string } } = {
  federalForm: { completed: false },
  stateForm: { completed: false },
  countyForm: { completed: false },
  centerForm: { completed: false }
};

  constructor(public router: Router, private fb: FormBuilder, private formService: FormForTeachParService ) {}


  ngOnInit(): void {
    this.initializeForms();
    this.loadFormsFromSession();
  }

  initializeForms() {
    this.federalForm = this.fb.group({
      fullName: ['', Validators.required],
      ssn: ['', Validators.required],
      citizenship: ['', Validators.required]
    });

    this.stateForm = this.fb.group({
      address: ['', Validators.required],
      childAge: ['', Validators.required],
      parentContact: ['', Validators.required]
    });

    this.countyForm = this.fb.group({
      immunizationRecord: ['', Validators.required],
      proofOfResidence: ['', Validators.required]
    });

    this.centerForm = this.fb.group({
      emergencyContactName: ['', Validators.required],
      emergencyContactPhone: ['', Validators.required],
      allergies: ['']
    });
  }

  getFormByName(name: string): FormGroup {
    switch (name) {
      case 'federalForm':
        return this.federalForm;
      case 'stateForm':
        return this.stateForm;
      case 'countyForm':
        return this.countyForm;
      case 'centerForm':
        return this.centerForm;
      default:
        throw new Error(`Unknown form name: ${name}`);
    }
  }  

  submitForm(formName: string) {
    const form = this.getFormByName(formName);
  
    if (form.valid) {
      const formData = form.value;
      sessionStorage.setItem(formName, JSON.stringify(formData));
  
      this.formStatus[formName] = {
        completed: true,
        completedDate: new Date().toLocaleDateString()
      };
  
      this.saveFormStatus();
  
      this.formService.setForm(`${formName} submitted on ${this.formStatus[formName].completedDate}`);
      this.formService.setFormStatus({ ...this.formStatus });
  
      alert(`${formName} submitted successfully.`);
    } else {
      alert(`Please complete all fields in ${formName} before submitting.`);
    }
  }
  

  loadFormsFromSession() {
    ['federalForm', 'stateForm', 'countyForm', 'centerForm'].forEach(formName => {
      const savedData = sessionStorage.getItem(formName);
      if (savedData) {
        const form = this.getFormByName(formName);
        form.patchValue(JSON.parse(savedData));
      }
    });

    const statusData = sessionStorage.getItem('formStatus');
    if (statusData) {
      this.formStatus = JSON.parse(statusData);
    }
  }

  saveFormStatus() {
    sessionStorage.setItem('formStatus', JSON.stringify(this.formStatus));
  }

  isCompleted(formName: string): boolean {
    return this.formStatus[formName]?.completed;
  }

  getCompletionDate(formName: string): string | undefined {
    return this.formStatus[formName]?.completedDate;
  }

  onSubmitFederal() {
    if (this.federalForm.valid) {
      this.saveForm('federalForm', this.federalForm);
    }
  }
  
  onSubmitState() {
    if (this.stateForm.valid) {
      this.saveForm('stateForm', this.stateForm);
    }
  }
  
  onSubmitCounty() {
    if (this.countyForm.valid) {
      this.saveForm('countyForm', this.countyForm);
    }
  }
  
  onSubmitCenter() {
    if (this.centerForm.valid) {
      this.saveForm('centerForm', this.centerForm);
    }
  }

  saveForm(formKey: string, form: FormGroup) {
    sessionStorage.setItem(formKey, JSON.stringify(form.value));
  }

  objectKeys = Object.keys;

  getStoredForm(formName: string): any {
    const raw = sessionStorage.getItem(formName);
    return raw ? JSON.parse(raw) : null;
  }
}
