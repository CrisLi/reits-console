import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from '../models/data-model';
import { ProjectService } from './project.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rc-project',
  templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {

  public project: Project;
  public isLoading = true;

  constructor(private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(params['projectId']))
      .subscribe((project) => {
        this.project = project;
        this.isLoading = false;
      }, (error) => {
        // https://github.com/angular/angular/issues/13795#issuecomment-270659667
        setTimeout(() => this.router.navigate(['..'], { relativeTo: this.route }));
      });
  }

}
