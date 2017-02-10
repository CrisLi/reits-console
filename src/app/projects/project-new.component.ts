import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { ProjectService } from './project.service';

@Component({
  selector: 'rc-project-new',
  templateUrl: './project-new.component.html',
  styles: []
})
export class ProjectNewComponent implements OnInit {

  isSubmiting: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private toastyService: ToastyService,
              private projectService: ProjectService) {}

  ngOnInit() {}

  create(project) {
    this.isSubmiting = true;
    this.projectService
      .create(project)
      .subscribe((response) => {
        this.back();
        this.toastyService.success('Project created.');
      }, (error) => {
        this.isSubmiting = false;
      });
  }

  back() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
