import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ModalDirective } from 'ng2-bootstrap';
import { TenantService, Tenant } from './tenant.service';

@Component({
  selector: 'rc-tenants',
  templateUrl: 'tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  tenants;
  isSubmiting: boolean;
  errorMessage: string;
  isLoading: boolean = true;

  @ViewChild('formModal')
  formModal: ModalDirective;

  constructor(private tenantService: TenantService,
              private toastyService: ToastyService) {};

  ngOnInit() {
    this.tenants = this.tenantService
      .getTenants()
      .do(() => this.isLoading = false);
  }

  createTenant(tenant: Tenant) {
    this.isSubmiting = true;
    this.errorMessage = null;
    this.tenantService.createTenant(tenant)
      .then(() => {
        this.formModal.hide();
        this.toastyService.success('Service Provider created.');
      })
      .catch((error: any) => {
        if (error.code === 'PERMISSION_DENIED') {
          this.errorMessage = 'This name is in use, please select another one.';
        }
        this.isSubmiting = false;
      });
  }

}
