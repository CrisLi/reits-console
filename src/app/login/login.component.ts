import { Component, OnInit } from '@angular/core';
import { AuthService, Credential } from '../shared/auth.service';

@Component({
  selector: 'rc-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  credential: Credential;
  isProcessing: boolean = false;
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.credential = {
      authSource: 'tenant',
      username: null,
      password: null
    };
  }

  login() {
    this.isProcessing = true;
    this.authService
      .login(this.credential)
      .subscribe(() => {
        this.error = 'login error';
      }, (err) => {
        this.isProcessing = false;
      }, () => {
        this.isProcessing = false;
      });
  }

}
