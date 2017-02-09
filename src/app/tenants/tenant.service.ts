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
    return this.apiService.get('/tenants');
  }

  createTenant(tenant: Tenant): Observable<any> {
    tenant['slug'] = slug(tenant.name, { lower: true });
    return this.apiService.post('/tenants', tenant);
  }

  selectTenant(tenantId: string): Observable<any> {
    return this.apiService.get(`/tenants/${tenantId}`)
      .map((res) => res.json())
      .do((tenant) => this.selectedTenant = tenant);
  }

}
