import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';
import { Tenant } from '../models/data-model';
import * as slug from 'slug';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class TenantService {

  selectedTenant: Tenant;

  constructor(private apiService: ApiService) {}

  getTenants(): Observable<any> {
    const s = JSON.stringify({ name: 1 });
    return this.apiService.get(`/tenants?s=${s}`);
  }

  createTenant(tenant: Tenant): Observable<any> {
    tenant['slug'] = slug(tenant.name, { lower: true });
    return this.apiService.post('/tenants', tenant);
  }

  selectTenant(tenantId: string): Observable<any> {
    const q = JSON.stringify({ slug: tenantId });
    return this.apiService.get(`/tenants?q=${q}&l=1`)
      .map((result: any) => result[0])
      .do((tenant: any) => this.selectedTenant = tenant);
  }

}
