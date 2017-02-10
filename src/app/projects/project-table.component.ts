import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'rc-project-table',
  templateUrl: 'project-table.component.html'
})
export class ProjectTableComponent implements OnInit, OnChanges {

  @Input()
  public data = [];
  public isLoading = true;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.data !== null) {
      this.isLoading = false;
    }
  }

}
