import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TenantService } from './tenant.service';

@Injectable()
export class TenantGuard implements CanActivate {

  constructor(private router: Router,
              private tenantService: TenantService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const tenantId = route.params['tenantId'];
    return this.tenantService
      .selectTenant(tenantId)
      .map((tenant) => !!tenant)
      .do((result) => {
        if (!result) {
          this.router.navigate(['/404']);
        }
      });
  }

}
