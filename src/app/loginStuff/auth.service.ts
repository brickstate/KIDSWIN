import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() {

  const savedRole = sessionStorage.getItem('userType');

  if (savedRole) {
    this.currentUser = { role: savedRole };
  }
  }

  login(role: string) {
    this.currentUser = { role };
    sessionStorage.setItem('userType', role);
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('userType');
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isLoggedIn() {
    return this.currentUser != null;
  }

  loggedInAdmin() {
    return this.currentUser?.role === 'admin';
  }

  isParentStudent() {
    return this.currentUser?.role === 'parent' || this.currentUser?.role === 'student';
  }
}
