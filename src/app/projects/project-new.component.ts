import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rc-project-new',
  templateUrl: './project-new.component.html',
  styles: []
})
export class ProjectNewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  back() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
