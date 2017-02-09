import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

const adminDomain = '51qjusa.com';

export interface Credential {
  username: string;
  authSource: string;
  password: string;
}

@Component({
  selector: 'rc-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  isProcessing: boolean;
  errorMessage: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login(credential) {

    this.isProcessing = true;
    this.errorMessage = null;

    const { username, password } = credential;

    this.authService.login(`${username}@${adminDomain}`, password)
      .subscribe((result) => {
        this.router.navigate(['/']);
      }, (error) => {
        this.errorMessage = 'Invalid username or password';
        this.isProcessing = false;
      });
  }

}
