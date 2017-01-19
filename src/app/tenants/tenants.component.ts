import { Component, OnInit } from '@angular/core';
import { TenantService } from './tenant.service';

@Component({
  selector: 'rc-tenants',
  templateUrl: 'tenants.component.html'
})
export class TenantsComponent implements OnInit {

  tenants;
  isLoading: boolean = true;

  constructor(private tenantService: TenantService) {};

  ngOnInit() {
    this.tenants = this.tenantService.getTenants();
    this.tenants.subscribe(() => this.isLoading = false);
  }

}
