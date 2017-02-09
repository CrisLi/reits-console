import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tenant } from '../models/data-model';

@Component({
  selector: 'rc-tenant-form',
  templateUrl: 'tenant-form.component.html'
})
export class TenantFormComponent implements OnInit {

  tenant: Tenant;

  @Input()
  isSubmiting: boolean;
  @Input()
  errorMessage: string;

  @Output()
  save = new EventEmitter<Tenant>();
  @Output()
  cancel = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.resetComponent();
  }

  onSubmit() {
    this.save.emit(this.tenant);
  }

  private resetComponent() {
    this.tenant = {
      name: '',
      description: ''
    };
    this.errorMessage = null;
    this.isSubmiting = false;
  }

  showValidationErrors(model) {
    return model.errors && (model.dirty || model.touched);
  }

}
