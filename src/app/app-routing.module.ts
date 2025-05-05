import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../app/loginStuff/admin/admin.component';
import { ParentComponent } from '../app/loginStuff/parent/parent.component';
import { StudentComponent } from '../app/loginStuff/student/student.component';
import { LoginComponent } from '../app/loginStuff/login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NotFoundComponent } from '../app/loginStuff/not-found/not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Set to a default component landing page to "Get Started"
  { path: 'admin', component: AdminComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'student', component: StudentComponent },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: 'login', component: LoginComponent }, // Separate route for login
  { path: 'attendance', component: AttendanceComponent},
  { path: 'student-detail', component: StudentDetailComponent }, 
  { path: 'home', component: HomePageComponent },
  { path: '**', component: NotFoundComponent } // Catch-all for unknown routes
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }