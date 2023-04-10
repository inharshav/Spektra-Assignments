import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuralprac',
  templateUrl: './structuralprac.component.html',
  styleUrls: ['./structuralprac.component.css']
})
export class StructuralpracComponent {
    selectOpt:string = "";
     onSelct(option: string){
      this.selectOpt = option;
    }
    
    
    
}