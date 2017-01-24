import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};

const adminDomain = '51qjusa.com';

export interface Credential {
  authSource: string;
  username: string;
  password: string;
}

@Component({
  selector: 'rc-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  isProcessing: boolean = false;
  errorMessage: string;

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {}

  login(credential) {

    this.isProcessing = true;
    this.errorMessage = null;

    const credentials = {
      email: `${credential.username}@${adminDomain}`,
      password: credential.password
    };

    this.af.auth
      .login(credentials, authConfig)
      .then((auth) => {
        this.router.navigate(['/']);
      })
      .catch((error: any) => {
        this.isProcessing = false;
        this.errorMessage = 'Invalid username or password';
      });
  }

}
