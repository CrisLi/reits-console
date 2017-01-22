import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { TenantService, Tenant } from './tenant.service';

@Component({
  selector: 'rc-tenant-form',
  templateUrl: 'tenant-form.component.html'
})
export class TenantFormComponent implements OnInit {

  opened: boolean;
  isSubmiting: boolean;
  tenant: Tenant;
  errorMessage: string;

  constructor(private tenantService: TenantService, private toastyService: ToastyService) { }

  ngOnInit() {
    this.resetComponent();
  }

  createTenant() {
    this.isSubmiting = true;
    this.errorMessage = null;
    this.tenantService.createTenant(this.tenant)
      .then(() => {
        this.toastyService.success('Service Provider created.');
        this.toggleForm(false);
      })
      .catch((error: any) => {
        if (error.code === 'PERMISSION_DENIED') {
          this.errorMessage = 'Service Provider name is existing, please select another one.';
        }
        this.isSubmiting = false;
      });
  }

  toggleForm(value: boolean) {
    this.opened = value;
    if (!this.opened) {
      this.resetComponent();
    }
  }

  private resetComponent() {
    this.tenant = {
      name: '',
      description: ''
    };
    this.errorMessage = null;
    this.isSubmiting = false;
  }

}
