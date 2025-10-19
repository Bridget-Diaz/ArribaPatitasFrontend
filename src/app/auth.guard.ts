import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    const isAuth = isBrowser ? localStorage.getItem('auth') === 'true' : false;
    if (!isAuth) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}