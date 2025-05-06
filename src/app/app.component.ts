import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kids-win';

  showLoginForm: boolean = false;  

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;  
  }
  loginRole: 'Teacher' | 'Parent' | null = null;
  showForm = false;
  loginFailed = false;

  username = '';
  password = '';

  constructor(public auth: AuthService, private router: Router) {}

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
      this.loginFailed = false;
  
      if (this.loginRole === 'Parent' || 'Teacher') {
        this.router.navigate(['/form']);
      }
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
    this.router.navigate(['/']);
  }
}