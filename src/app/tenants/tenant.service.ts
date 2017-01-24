import { Injectable } from '@angular/core';
import * as slug from 'slug';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

export interface Tenant {
  name: string;
  description?: string;
}

@Injectable()
export class TenantService {

  private tenants: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.tenants = af.database.list('tenants');
  }

  getTenants(): FirebaseListObservable<any> {
    return this.tenants;
  }

  createTenant(tenant: Tenant) {
    const key = slug(tenant.name, { lower: true });
    return this.af.database.object(`tenants/${key}`).set(tenant);
  }

  selectTenant(tenantId: string): FirebaseObjectObservable<any> {
    return this.af.database.object(`tenants/${tenantId}`);
  }

}
