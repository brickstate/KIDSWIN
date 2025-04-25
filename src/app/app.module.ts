import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './loginStuff/admin/admin.component';
import { ParentComponent } from './loginStuff/parent/parent.component';
import { StudentComponent } from './loginStuff/student/student.component';
import { LoginComponent } from './loginStuff/login/login.component';
import { NotFoundComponent } from './loginStuff/not-found/not-found.component';
import { LogoutComponent } from './loginStuff/logout/logout.component';

import { FormsModule } from '@angular/forms';
import { MilestoneComponent } from './milestone/milestone.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ParentComponent,
    StudentComponent,
    LoginComponent,
    NotFoundComponent,
    LogoutComponent
    AppComponent,
    MilestoneComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//test