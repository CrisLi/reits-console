import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './project-form.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: ProjectFormComponent,
  }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormComponent
  ],
  imports: [
    SharedModule
  ],
  providers: []
})
export class ProjectsModule { }
