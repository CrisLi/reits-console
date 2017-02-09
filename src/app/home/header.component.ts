import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'rc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.currentUser.nickname;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
