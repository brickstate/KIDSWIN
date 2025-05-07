import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormForTeachParService } from '../form-for-teach-par.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html'
})
export class FormPageComponent {
  formInput: string = '';

  constructor(public auth: AuthService, public formService: FormForTeachParService) {}

  submitForm() {
    this.formService.setForm(this.formInput);
  }
}
