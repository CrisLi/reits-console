import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  exports: [
    CommonModule, FormsModule, RouterModule, ClarityModule
  ]
})
export class SharedModule {
}
