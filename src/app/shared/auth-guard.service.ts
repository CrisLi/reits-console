import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private af: AngularFire, private router: Router) {}

  canActivate() {
    return this.af.auth.map((auth) => {
      if (auth === null) {
        this.router.navigate(['/login']);
      }
      return true;
    });
  }

}
