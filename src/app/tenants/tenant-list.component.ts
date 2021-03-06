import { Component, OnInit, Input } from '@angular/core';
import { Tenant } from '../models/data-model';

@Component({
  selector: 'rc-tenant-list',
  templateUrl: 'tenant-list.component.html',
  styleUrls: ['tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

  @Input()
  tenants: Tenant[] = [];

  @Input()
  isLoading = false;

  constructor() {}

  ngOnInit() {}

}
