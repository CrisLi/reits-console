import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/bindNodeCallback';
import * as auth0 from 'auth0-js';

const realm = 'Username-Password-Authentication';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    domain: 'chris-li.auth0.com',
    clientID: 'P4oZ6O93FslFuOsFG2RoudyJdELIUwBf',
    callbackURL: 'http://localhost:4200',
    responseType: 'token id_token'
  });

  constructor() {}

  login(username, password) {

    const params = {
      realm,
      username,
      password
    };

    return Observable.create((observer: Observer<any>) => {
      this.auth0.client.login(params, (error, result) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(result);
        }
        observer.complete();
      });
    });
  }

}
