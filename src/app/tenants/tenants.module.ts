import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TenantsComponent } from './tenants.component';
import { TenantComponent } from './tenant.component';
import { TenantFormComponent } from './tenant-form.component';
import { TenantService } from './tenant.service';
import { SharedModule } from '../shared/shared.module';
import { routes as projectRoutes } from '../projects/projects.module';

export const routes: Routes = [
  {
    path: ':tenantId',
    component: TenantComponent,
    children: [
      {
        path: 'projects',
        children: projectRoutes
      }
    ]
  }
];

@NgModule({
  declarations: [
    TenantsComponent,
    TenantFormComponent,
    TenantComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [TenantService],
  exports: [
    TenantsComponent
  ]
})
export class TenantsModule { }
