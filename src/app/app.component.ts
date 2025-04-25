import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kids-win';

  showLoginForm: boolean = false;  // Controls visibility of login form

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;  // Toggle the visibility
  }
}
