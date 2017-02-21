import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/operator/do';
import * as auth0 from 'auth0-js';

const realm = 'Username-Password-Authentication';
const jwtHelper: JwtHelper = new JwtHelper();

@Injectable()
export class AuthService {

  private _currentUser: any;

  private auth0 = new auth0.WebAuth({
    domain: 'chris-li.auth0.com',
    clientID: 'P4oZ6O93FslFuOsFG2RoudyJdELIUwBf',
    responseType: 'token id_token'
  });

  constructor() {
    this.loadCurrentUser();
  }

  login(username, password): Observable<any> {

    const params = {
      realm,
      username,
      password
    };

    return Observable.create((observer: Observer<any>) => {

      const loginCallback = (error, result) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(result);
        }
        observer.complete();
      };

      this.auth0.client.login(params, loginCallback);

    }).do((result) => this.setUser(result));
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this._currentUser = null;
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired();
  }

  private setUser(result): void {
    if (result && result.idToken && result.accessToken) {
      localStorage.setItem('access_token', result.accessToken);
      localStorage.setItem('id_token', result.idToken);
      this._currentUser = this.loadCurrentUser();
    }
  }

  get currentUser() {
    if (!!this._currentUser) {
      return this._currentUser;
    }
    this.loadCurrentUser();
    return this._currentUser;
  }

  private loadCurrentUser() {
    try {
      this._currentUser = jwtHelper.decodeToken(localStorage.getItem('id_token'));
    } catch (error) {
      this._currentUser = null;
    }
  }

}
