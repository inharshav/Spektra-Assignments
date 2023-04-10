import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortable',
  templateUrl: './fortable.component.html',
  styleUrls: ['./fortable.component.css']
})

export class FortableComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {

}

arr:any [][] = [["Harsha", 22, "Bengaluru"], ["Siva", 22, "Hyderabad"], ["Deepali", 21, "Bihar"]]
countries: string[] = ['India', 'Pakistan', 'China', 'USA', 'Australia'];
    selectedCountry: string = "";
   
 }
