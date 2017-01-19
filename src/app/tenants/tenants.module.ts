import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TenantsComponent } from './tenants.component';
import { TenantService } from './tenant.service';

export const routes: Routes = [
  {
    path: '',
    component: TenantsComponent
  }
];

@NgModule({
  declarations: [
    TenantsComponent
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
