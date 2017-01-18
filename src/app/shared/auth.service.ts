import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface Credential {
  authSource: string;
  username: string;
  password: string;
}

@Injectable()
export class AuthService {

  constructor() { }

  login(credential: Credential): Observable<String>  {
    console.log(credential);
    return Observable.interval(1000).first().map((i) => i.toString());
  }
}
