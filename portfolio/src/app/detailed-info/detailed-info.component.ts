import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-info',
  template: `
  <h3> You have selected have selected employee with id = {{employeeId}} </h3> 
  `,
  styles: []
})
export class DetailedInfoComponent implements OnInit{
  
  public employeeId;
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
  }

}
