import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from './tenant.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rc-tenant',
  templateUrl: 'tenant.component.html'
})
export class TenantComponent implements OnInit {

  tenant$;
  constructor(private route: ActivatedRoute, private tenantService: TenantService) {}

  ngOnInit() {
    this.tenant$ = this.route.params
      .map((params: any) => params.tenantId)
      .switchMap((tenantId: string) => this.tenantService.selectTenant(tenantId));
  }

};
