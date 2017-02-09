import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';
import { TenantService } from '../tenants/tenant.service';
import { Project } from '../models/data-model';

@Injectable()
export class ProjectService {

  constructor(private apiService: ApiService, private tenantService: TenantService) {}

  create(project: Project): Observable<any> {
    return this.apiService.post(this.getBaseUrl(), project);
  }

  private getBaseUrl() {
    return `/tenants/${this.tenantService.selectedTenant}/project`;
  }
}
