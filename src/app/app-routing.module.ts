import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../app/loginStuff/admin/admin.component';
import { ParentComponent } from '../app/loginStuff/parent/parent.component';
import { StudentComponent } from '../app/loginStuff/student/student.component';
import { LoginComponent } from '../app/loginStuff/login/login.component';
import { NotFoundComponent } from '../app/loginStuff/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AdminComponent }, // Set to a default component (e.g., AdminComponent or Dashboard)
  { path: 'admin', component: AdminComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'student', component: StudentComponent },
  { path: 'login', component: LoginComponent }, // Separate route for login
  { path: '**', component: NotFoundComponent } // Catch-all for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }