import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export interface Tenant {
  id: string;
  name: string;
  description: string;
}

@Injectable()
export class TenantService {

  private tenantRef;
  private tenants: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.tenants = af.database.list('tenants');
  }

  getTenants(): FirebaseListObservable<any> {
    return this.tenants;
  }

}
