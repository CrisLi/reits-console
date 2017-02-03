import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rc-tenant-sidebar',
  templateUrl: 'tenant-sidebar.component.html',
  styleUrls: ['tenant-sidebar.component.css']
})
export class TenantSidebarComponent implements OnInit {

  @Input()
  tenant;

  items = [{
    link: 'projects',
    label: 'Projects'
  }, {
    link: 'accounts',
    label: 'Accounts'
  }, {
    link: 'funds',
    label: 'Funds'
  }, {
    link: 'users',
    label: 'Users'
  }, {
    link: 'settings',
    label: 'Settings'
  }];

  constructor() {}

  ngOnInit() {}

}
