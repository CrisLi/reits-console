import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/api.service';
import { TenantService } from '../tenants/tenant.service';
import { Project } from '../models/data-model';

@Injectable()
export class ProjectService {

  constructor(private apiService: ApiService, private tenantService: TenantService) {}

  getProjects(): Observable<any> {
    const q = JSON.stringify({ tenantId: this.tenantService.selectedTenant._id });
    return this.apiService.get(`/projects?q=${q}`);
  }

  create(project: Project): Observable<any> {
    project['tenantId'] = this.tenantService.selectedTenant._id;
    return this.apiService.post(`/projects`, project);
  }

}
