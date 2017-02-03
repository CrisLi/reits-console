import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from './tenant.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rc-tenant',
  templateUrl: 'tenant.component.html',
  styleUrls: ['tenant.component.css']
})
export class TenantComponent implements OnInit {

  tenant;

  constructor(private route: ActivatedRoute, private tenantService: TenantService) {}

  ngOnInit() {
    this.tenant = this.tenantService.selectedTenant;
  }

};
