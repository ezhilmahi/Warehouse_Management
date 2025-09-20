import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const expectedRoles = next.data['roles'] || []; 
    const userRole = localStorage.getItem('userRole')?.toLowerCase(); 

   
    if (!userRole) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    if (expectedRoles.length > 0 && !expectedRoles.includes(userRole)) {
  this.router.navigate(['/login']);
  return false;
}


    return true;
  }
}