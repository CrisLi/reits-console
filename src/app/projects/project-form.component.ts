import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      name: ['', Validators.required],
      // address: this.fb.group({
      //   street: [''],
      //   city: ''
      // })
      address: this.fb.group(new Address())
    });
  }

}
