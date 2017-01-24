import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    ToastyModule.forRoot()
  ],
  providers: [
  ],
  exports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ButtonsModule,
    AlertModule,
    ToastyModule
  ]
})
export class SharedModule {
}
