import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
    name: string= "Harshavardhan"
    greet():void{
      alert("Hello thanks for signing in " + this.name);

    }
  }
