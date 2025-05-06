import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const actualRole = this.auth.role;
  
    // Support string or string[]
    if (Array.isArray(expectedRole)) {
      return expectedRole.includes(actualRole);
    }
  
    return actualRole === expectedRole;
  }  
}
