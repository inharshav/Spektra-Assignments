import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detailsoftech',
  template: `
  <h3> Employee List </h3>
  <ul class="items">
    <li (click)= "onSelect(employee)" *ngFor="let employee of employees">
      <span class="badge">{{employee.id}} </span> {{employee.name}}
    </li>
  <ul> 
  `,
  styles:[]
})
export class DetailsofTechComponent implements OnInit {

  employees = [
    {"id": 1, "name" : "Arnav Goswami"},
    {"id": 2, "name" : "Raghav Avasthi"},
    {"id": 3, "name" : "Varun Shukla"},
    
  ]
  
  constructor( private router: Router){ }

  ngOnInit(): void {
  }

  onSelect( employee : any){
   this.router.navigate(['/detailsoftech', employee.id]);  
  }
}