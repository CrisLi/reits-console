import { Component, OnInit, AfterContentInit, Input, ContentChild } from '@angular/core';
import { NgControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'rc-form-element',
  templateUrl: 'form-element.component.html'
})
export class FormElementComponent implements OnInit, AfterContentInit {

  @Input()
  label: string;

  @ContentChild(NgControl)
  input: NgControl;

  @ContentChild(RequiredValidator)
  requiredValidator: RequiredValidator;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}

  get hasError() {
    if (!this.input) {
      return false;
    }
    return (this.input.dirty || this.input.touched) && this.input.invalid;
  }

  get required() {
    return !!this.requiredValidator;
  }

}
