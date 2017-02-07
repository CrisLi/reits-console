import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormElementComponent } from './form-element.component';

@NgModule({
  declarations: [
    InputComponent,
    FormElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    FormElementComponent
  ]
})
export class ComponentsModule { }
