import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @Input() totalStudents: number | undefined;
  @Input() totalMales: number | undefined;
  @Input() totalFemales: number | undefined;
  
}
