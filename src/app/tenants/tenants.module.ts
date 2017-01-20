import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
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
    FormsModule,
    RouterModule,
    ClarityModule.forChild(),
  ],
  providers: [TenantService],
  exports: [
    TenantsComponent
  ]
})
export class TenantsModule { }
