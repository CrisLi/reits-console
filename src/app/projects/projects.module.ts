import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
    BrowserModule
  ],
  providers: []
})
export class ProjectsModule { }
