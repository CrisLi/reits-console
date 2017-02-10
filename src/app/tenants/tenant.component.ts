import { Component, OnInit } from '@angular/core';
import { TenantService } from './tenant.service';

@Component({
  selector: 'rc-tenant',
  templateUrl: 'tenant.component.html',
  styleUrls: ['tenant.component.css']
})
export class TenantComponent implements OnInit {

  tenant;

  constructor(private tenantService: TenantService) {}

  ngOnInit() {
    this.tenant = this.tenantService.selectedTenant;
  }

};
