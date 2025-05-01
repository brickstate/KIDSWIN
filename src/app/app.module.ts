import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './loginStuff/admin/admin.component';
import { ParentComponent } from './loginStuff/parent/parent.component';
import { StudentComponent } from './loginStuff/student/student.component';
import { LoginComponent } from './loginStuff/login/login.component';
import { NotFoundComponent } from './loginStuff/not-found/not-found.component';
import { LogoutComponent } from './loginStuff/logout/logout.component';

import { AttendanceComponent } from './attendance/attendance.component';

import { MilestoneComponent } from './milestone/milestone.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ParentComponent,
    StudentComponent,
    LoginComponent,
    NotFoundComponent,
    LogoutComponent,
    MilestoneComponent, 
    AttendanceComponent,
    PageNotFoundComponent,
    StudentDetailComponent,
    FormsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

