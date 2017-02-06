import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'rc-input',
  templateUrl: 'input.component.html',
  providers: [INPUT_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input()
  required: boolean;

  @Input()
  feedback: string;

  @Input()
  hasError: boolean;

  value: any;

  onTouched = () => {};
  onChange = (_: any) => {};

  ngOnInit() {
    this.required = (this.required !== undefined);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
