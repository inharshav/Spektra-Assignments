import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 
  @Input() getTotalProducts:  number;
  @Input() getTotalQuantity:  number;
  @Input() getTotalSum:  number;
}
