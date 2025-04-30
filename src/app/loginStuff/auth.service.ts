import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() { }

  login(role: string) {
    this.currentUser = { role };
  }

  logout() {
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isLoggedIn() {
    return this.currentUser != null;
  }

  isAdmin() {
    return this.currentUser?.role === 'admin';
  }

  isParentStudent() {
    return this.currentUser?.role === 'parent' || this.currentUser?.role === 'student';
  }
}
