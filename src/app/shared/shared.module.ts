import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ToastyModule } from 'ng2-toasty';
import { ComponentsModule } from '../components/components.module';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ToastyModule.forRoot(),
    ComponentsModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonsModule,
    DropdownModule,
    AlertModule,
    ModalModule,
    ToastyModule,
    ComponentsModule
  ]
})
export class SharedModule {
}
