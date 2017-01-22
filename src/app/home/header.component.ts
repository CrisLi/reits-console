import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'rc-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  constructor(private af: AngularFire, private router: Router) {}

  ngOnInit() { }

  logout() {
    this.af.auth.logout()
      .then(() => this.router.navigate(['/login']))
      .catch(() => this.router.navigate(['/login']));
  }

}
