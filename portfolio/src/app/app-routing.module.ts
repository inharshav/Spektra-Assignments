import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsofTechComponent } from './detailsoftech/detailsoftech.component';
import { ListofpplComponent } from './listofppl/listofppl.component';
import { DetailedInfoComponent } from './detailed-info/detailed-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/detailsoftech', pathMatch:'full'},
  {path: 'listofppl', component: ListofpplComponent},
  {path:'detailsoftech', component: DetailsofTechComponent},
  {path: 'detailed-info/:id', component: DetailedInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListofpplComponent,
                                  DetailsofTechComponent,
                                  DetailedInfoComponent
                                  ]
                                  