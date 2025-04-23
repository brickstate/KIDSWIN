import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

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



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ParentComponent,
    StudentComponent,
    LoginComponent,
    NotFoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//test