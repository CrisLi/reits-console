import { Component, OnInit } from '@angular/core';
import { TenantService } from './tenant.service';

@Component({
  selector: 'rc-tenants',
  templateUrl: 'tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  tenants;
  isLoading: boolean = true;
  showForm: boolean = false;

  constructor(private tenantService: TenantService) {};

  ngOnInit() {
    this.tenants = this.tenantService.getTenants();
    this.tenants.subscribe(() => this.isLoading = false);
  }

  toggleForm(value: boolean) {
    this.showForm = value;
  }

}
