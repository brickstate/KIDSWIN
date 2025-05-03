import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

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
  loginRole: 'Teacher' | 'Parent' | null = null;
  showForm = false;
  loginFailed = false;

  username = '';
  password = '';

  constructor(public auth: AuthService) {}

  showLogin(role: 'Teacher' | 'Parent') {
    this.loginRole = role;
    this.showForm = true;
    this.loginFailed = false;
    this.username = '';
    this.password = '';
  }

  submitLogin() {
    if (this.loginRole && this.auth.login(this.loginRole, this.username, this.password)) {
      this.showForm = false;
    } else {
      this.loginFailed = true;
    }
  }

  cancelLogin() {
    this.showForm = false;
  }

  logout() {
    this.auth.logout();
    this.loginRole = null;
  }
}