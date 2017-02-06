import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Address } from '../models/data-model';

@Component({
  selector: 'rc-project-form',
  templateUrl: './project-form.component.html',
  styles: []
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup;
  nameChangeLog: string[] = [];

  @Output()
  cancel: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.logNameChange();
  }

  logNameChange() {
    const nameControl = this.projectForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  createForm() {
    this.projectForm = this.fb.group({
      name: [''],
      address: this.fb.group(new Address())
    });
  }

  hasError(path: Array<string | number> | string, errorCode: string): boolean {
    const fc = this.projectForm.get(path);
    if ((fc.dirty || fc.touched) && fc.invalid) {
      return true;
    }
    return false;
  }

}
