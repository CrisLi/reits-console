import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forChild(),
    ToastyModule.forRoot()
  ],
  providers: [
  ],
  exports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ClarityModule,
    ToastyModule
  ]
})
export class SharedModule {
}
