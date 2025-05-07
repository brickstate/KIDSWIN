import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../app/loginStuff/admin/admin.component';
import { ParentComponent } from '../app/loginStuff/parent/parent.component';
import { LoginComponent } from '../app/loginStuff/login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NotFoundComponent } from '../app/loginStuff/not-found/not-found.component';
import { RoleGuard } from './auth/role.guard';
import { FormPageComponent } from './form-page/form-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'teacher', component: AdminComponent, canActivate: [RoleGuard], data: { role: 'Teacher' } },
  { path: 'parent', component: ParentComponent, canActivate: [RoleGuard], data: { role: 'Parent' } },
  { path: '', component: HomePageComponent }, 



  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: 'attendance', component: AttendanceComponent},
  { path: 'form', component: FormPageComponent, canActivate: [RoleGuard], data: { role: ['Parent', 'Teacher'] }},
  { path: 'login', component: LoginComponent }, // Separate route for login
  { path: 'admin/attendance', component: AttendanceComponent},
  { path: 'admin/milestone', component: MilestoneComponent},
  { path: 'parent/attendance/student-detail', component: StudentDetailComponent },
  { path: 'admin/attendance/student-detail', component: StudentDetailComponent },
  { path: 'student-detail', component: StudentDetailComponent },   
  { path: 'home', component: HomePageComponent },
  { path: 'parent/forms', component: FormsComponent},
  { path: 'parent/attendance', component: AttendanceComponent},
  { path: 'parent/milestone', component: MilestoneComponent},
  { path: '**', component: NotFoundComponent } // Catch-all for unknown routes
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }