import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path : 'student', component: StudentComponent},
  {path : 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [StudentComponent, AdminComponent]
