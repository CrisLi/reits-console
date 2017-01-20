import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TenantsComponent } from './tenants.component';
import { TenantFormComponent } from './tenant-form.component';
import { TenantService } from './tenant.service';

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
    BrowserModule,
    RouterModule
  ],
  providers: [TenantService],
  exports: [
    TenantsComponent
  ]
})
export class TenantsModule { }
