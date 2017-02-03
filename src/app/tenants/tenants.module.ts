import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TenantsComponent } from './tenants.component';
import { TenantSidebarComponent } from './tenant-sidebar.component';
import { TenantListComponent } from './tenant-list.component';
import { TenantComponent } from './tenant.component';
import { TenantFormComponent } from './tenant-form.component';
import { TenantService } from './tenant.service';
import { TenantGuard } from './tenant-guard.service';
import { SharedModule } from '../shared/shared.module';
import { routes as projectRoutes } from '../projects/projects.module';

export const routes: Routes = [
  {
    path: ':tenantId',
    pathMatch: 'full',
    redirectTo: '/tenants/:tenantId/projects'
  },
  {
    path: ':tenantId',
    component: TenantComponent,
    canActivate: [TenantGuard],
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
    TenantListComponent,
    TenantFormComponent,
    TenantComponent,
    TenantSidebarComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [TenantService, TenantGuard],
  exports: [
    TenantsComponent
  ]
})
export class TenantsModule { }
