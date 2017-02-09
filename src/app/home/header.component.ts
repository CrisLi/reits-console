import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  username = 'Admin';

  constructor(private router: Router) {}

  ngOnInit() { }

  logout() {
    // this.af.auth.logout()
    //   .then(() => this.router.navigate(['/login']))
    //   .catch(() => this.router.navigate(['/login']));
  }

}
