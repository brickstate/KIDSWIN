import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private teacherCreds = [
    { username: 'david_r', password: '3478*#54' },
    { username: 'snyder', password: 'f238&@*$' }
  ];

  private parentCreds = [
    { username: 'hopkins', password: 'William56$hj' },
    { username: 'kate_h', password: 'kfejk@*_' }
  ];

  role: 'Teacher' | 'Parent' | null = null;
  username: string | null = null; 

  login(role: 'Teacher' | 'Parent', username: string, password: string): boolean {
    let valid = false;

    if (role === 'Teacher') {
      valid = this.teacherCreds.some(user => user.username === username && user.password === password);
    } else if (role === 'Parent') {
      valid = this.parentCreds.some(user => user.username === username && user.password === password);
    }

    if (valid) {
      this.role = role;
      this.username = username; 
    }

    return valid;
  }

  logout() {
    this.role = null;
    this.username = null;
  }

  isLoggedIn(): boolean {
    return this.role !== null;
  }
}