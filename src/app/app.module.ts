import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './loginStuff/admin/admin.component';
import { ParentComponent } from './loginStuff/parent/parent.component';
import { LoginComponent } from './loginStuff/login/login.component';
import { NotFoundComponent } from './loginStuff/not-found/not-found.component';
import { LogoutComponent } from './loginStuff/logout/logout.component';


import { AttendanceComponent } from './attendance/attendance.component';

import { MilestoneComponent } from './milestone/milestone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { FormPageComponent } from './form-page/form-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ParentComponent,
    LoginComponent,
    NotFoundComponent,
    LogoutComponent,
    MilestoneComponent, 
    AttendanceComponent,
    PageNotFoundComponent,
    StudentDetailComponent,
    FormsComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

