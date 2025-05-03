import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  
  federalForm!: FormGroup;
  stateForm!: FormGroup;
  countyForm!: FormGroup;
  centerForm!: FormGroup;

  objectKeys = Object.keys;

  formStatus: { [key: string]: { completed: boolean; completedDate?: string } } = {
    federalForm: { completed: false },
    stateForm: { completed: false },
    countyForm: { completed: false },
    centerForm: { completed: false }
  };
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
      allergies: ['']  // optional field
    });
  
    this.loadFormsFromSession();
  
    //this alwasy listens to changes and will 
    //this.setupFormListeners();
  }

  /*
  setupFormListeners() {
    this.federalForm.valueChanges.subscribe(() => this.saveForm('federalForm', this.federalForm));
    this.stateForm.valueChanges.subscribe(() => this.saveForm('stateForm', this.stateForm));
    this.countyForm.valueChanges.subscribe(() => this.saveForm('countyForm', this.countyForm));
    this.centerForm.valueChanges.subscribe(() => this.saveForm('centerForm', this.centerForm));
  }
  */

  //maybe delete this method?
  saveForm(formKey: string, form: FormGroup) {
    sessionStorage.setItem(formKey, JSON.stringify(form.value));
    
    // If all required fields are filled, mark as completed
    if (form.valid && !this.formStatus[formKey].completed) {
      this.formStatus[formKey].completed = true;
      this.formStatus[formKey].completedDate = new Date().toLocaleDateString();
      this.saveFormStatus();
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
    }
  }

  getStoredForm(formName: string): any {
    const raw = sessionStorage.getItem(formName);
    return raw ? JSON.parse(raw) : null;
  }

  getFormByName(name: string): FormGroup {
    switch (name) {
      case 'federalForm': return this.federalForm;
      case 'stateForm': return this.stateForm;
      case 'countyForm': return this.countyForm;
      case 'centerForm': return this.centerForm;
      default: throw new Error('Invalid form name');
    }
  }

  loadFormsFromSession() {
    const federalData = sessionStorage.getItem('federalForm');
    const stateData = sessionStorage.getItem('stateForm');
    const countyData = sessionStorage.getItem('countyForm');
    const centerData = sessionStorage.getItem('centerForm');
    const statusData = sessionStorage.getItem('formStatus');
  
    if (federalData) this.federalForm.patchValue(JSON.parse(federalData));
    if (stateData) this.stateForm.patchValue(JSON.parse(stateData));
    if (countyData) this.countyForm.patchValue(JSON.parse(countyData));
    if (centerData) this.centerForm.patchValue(JSON.parse(centerData));
    if (statusData) this.formStatus = JSON.parse(statusData);
  }

  saveFormStatus() {
    sessionStorage.setItem('formStatus', JSON.stringify(this.formStatus));
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

}
