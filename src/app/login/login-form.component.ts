import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';

export interface Credential {
  authSource: string;
  username: string;
  password: string;
}

@Component({
  selector: 'rc-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credential: Credential;

  @Output()
  login: EventEmitter<Credential> = new EventEmitter<Credential>();

  @Input()
  isProcessing: boolean = false;

  @Input()
  errorMessage: string;

  constructor() {}

  ngOnInit() {
    this.credential = {
      authSource: 'tenant',
      username: '',
      password: ''
    };
  }

  submit() {
    this.login.emit(this.credential);
  }

}
