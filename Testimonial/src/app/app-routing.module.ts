import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './details/details.component';
import { Det2Component } from './det2/det2.component';


const routes: Routes = [
  {path:'employee', component: EmployeeComponent},
  {path: 'details', component: DetailsComponent},
  {path:'det2', component: Det2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[EmployeeComponent, DetailsComponent]