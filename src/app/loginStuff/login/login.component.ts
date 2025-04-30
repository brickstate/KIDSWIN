import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedRole: string = ''; // To hold the selected role

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Handle the login based on the selected role
    if (this.selectedRole === 'admin') {
      this.authService.login('admin');
      this.router.navigate(['/admin']);
    } else if (this.selectedRole === 'parent') {
      this.authService.login('parent');
      this.router.navigate(['/parent']);
    } else if (this.selectedRole === 'student') {
      this.authService.login('student');
      this.router.navigate(['/student']);
    } else {
      alert('Please select a role to login');
    }
  }
}
