import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './details/details.component';
import { Det2Component } from './det2/det2.component';

@NgModule({

  declarations: [
    AppComponent,
    EmployeeComponent,
    DetailsComponent,
    Det2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
