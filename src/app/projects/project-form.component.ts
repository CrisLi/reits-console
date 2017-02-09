import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  save: EventEmitter<any> = new EventEmitter();

  @Output()
  cancel: EventEmitter<any> = new EventEmitter();

  @Input()
  isSubmiting: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  submit() {
    if (this.projectForm.valid) {
      this.save.emit(this.projectForm.value);
    }
  }

  createForm() {
    this.projectForm = this.fb.group({
      name: [''],
      address: this.fb.group(new Address()),
      type: ['Public'],
      comments: ['']
    });
  }

}
