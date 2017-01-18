import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'rc-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  constructor(private af: AngularFire) {}

  ngOnInit() { }

  logout() {
    this.af.auth.logout();
  }

}
