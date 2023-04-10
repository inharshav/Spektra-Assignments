import { Component } from '@angular/core';

@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.component.html',
  styleUrls: ['./iteminfo.component.css']
})
export class IteminfoComponent {
  onClick(): void{
    alert ("Order Placed");
  }

}
