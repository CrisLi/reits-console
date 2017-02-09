import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { ToastyService } from 'ng2-toasty';
import { ModalDirective } from 'ng2-bootstrap';
import { TenantService } from './tenant.service';
import { Tenant } from '../models/data-model';

@Component({
  selector: 'rc-tenants',
  templateUrl: 'tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  tenants;
  isSubmiting: boolean;
  errorMessage: string;
  isLoading: boolean;

  @ViewChild('formModal')
  formModal: ModalDirective;

  constructor(private tenantService: TenantService,
              private toastyService: ToastyService) {};

  ngOnInit() {
    this.getTenants();
  }

  getTenants() {
    this.isLoading = true;
    this.tenants = this.tenantService
      .getTenants()
      .catch(() => Observable.empty())
      .do(() => this.isLoading = false);
  }

  createTenant(tenant: Tenant) {
    this.isSubmiting = true;
    this.errorMessage = null;
    this.tenantService.createTenant(tenant)
      .subscribe((res) => {
        this.getTenants();
        this.formModal.hide();
        this.toastyService.success('Service Provider created.');
      }, (error: any) => {
        if (error.message.includes('Unique index')) {
          this.errorMessage = 'This name is in use, please select another one.';
        } else {
          this.errorMessage = error.message;
        }
        this.isSubmiting = false;
      });
  }

}
