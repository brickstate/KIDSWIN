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


const routes: Routes = [
  { path: 'teacher', component: AdminComponent, canActivate: [RoleGuard], data: { role: 'Teacher' } },
  { path: 'parent', component: ParentComponent, canActivate: [RoleGuard], data: { role: 'Parent' } },
  { path: '', component: AdminComponent }, 
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: 'login', component: LoginComponent }, 
  { path: 'attendance', component: AttendanceComponent},
  { path: 'student-detail', component: StudentDetailComponent }, 
  { path: 'form', component: FormPageComponent, canActivate: [RoleGuard], data: { role: ['Parent', 'Teacher'] }},
  { path: '**', component: NotFoundComponent } 
  
];
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }