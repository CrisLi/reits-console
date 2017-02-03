import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as slug from 'slug';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

export interface Tenant {
  name: string;
  description?: string;
}

@Injectable()
export class TenantService {

  private tenants: Observable<any>;
  selectedTenant: Tenant;

  constructor(private af: AngularFire) {
    this.tenants = af.database.list('tenants');
  }

  getTenants(): Observable<any> {
    return this.tenants;
  }

  createTenant(tenant: Tenant) {
    const key = slug(tenant.name, { lower: true });
    return this.af.database.object(`tenants/${key}`).set(tenant);
  }

  selectTenant(tenantId: string): Observable<any> {
    return this.af.database
      .object(`tenants/${tenantId}`)
      .do((tenant) => this.selectedTenant = tenant);
  }

}
