import { Component } from '@angular/core';
import { EmpdetailsService } from '../empdetails.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})

export class EmpdetailsComponent {
employees: any[] | undefined;

constructor(private empdetailsService: EmpdetailsService) {}

displayEmployees() {
  this.employees=this.empdetailsService.getEmployees();
}

}
