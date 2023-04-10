import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
    name: string= "Harshavardhan"
    greet():void{
      alert("Hello thanks for signing in " + this.name);

    }
  }


