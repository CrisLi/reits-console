import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header.component';
import { AuthGuard } from './shared/auth-guard.service';
import { TenantsModule } from './tenants/tenants.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    TenantsModule,
    ProjectsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
