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
  styles: []
})
export class LoginComponent implements OnInit {

  credential: Credential;
  isProcessing: boolean = false;
  error: boolean;

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {
    this.credential = {
      authSource: 'tenant',
      username: null,
      password: null
    };
    this.af.auth.subscribe((auth) => {
      console.log('Login ok');
    });
  }

  login() {

    this.isProcessing = true;

    const credentials = {
      email: `${this.credential.username}@${adminDomain}`,
      password: this.credential.password
    };

    this.af.auth
      .login(credentials, authConfig)
      .then((auth) => {
        this.router.navigate(['/']);
      })
      .catch((error: any) => {
        this.isProcessing = false;
        this.error = true;
      });
  }

}
