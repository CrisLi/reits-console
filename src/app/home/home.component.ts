import { Component, OnInit } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'rc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  message;

  constructor(private toastyConfig: ToastyConfig ) {}

  ngOnInit() {
    this.toastyConfig.theme = 'bootstrap';
    this.toastyConfig.timeout = 3000;
  }

}
