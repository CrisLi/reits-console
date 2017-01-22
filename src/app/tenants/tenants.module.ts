import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TenantsComponent } from './tenants.component';
import { TenantFormComponent } from './tenant-form.component';
import { TenantService } from './tenant.service';
import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: TenantsComponent
  }
];

@NgModule({
  declarations: [
    TenantsComponent,
    TenantFormComponent
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
