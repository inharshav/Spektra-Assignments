import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [ 
  {id : 101, name: 'Harsha', gender: 'Male', dob:'20/10/2000', course: 'Engineering', coursefee: 100000 },
  {id : 102, name: 'Likhith', gender: 'Male', dob:'08/10/1998', course: 'BCA', coursefee: 50000 },
  {id : 103, name: 'Sneha', gender: 'Female', dob:'13/06/2001', course: 'BCom', coursefee: 75000 },
  {id : 104, name: 'Shwetha', gender: 'Female', dob:'20/11/1996', course: 'Arts', coursefee: 35000 },
  {id : 105, name: 'Poorna', gender: 'Male', dob:'22/11/1999', course: 'Engineering', coursefee: 95000 }
  ];

 
  getTotalStudents(){
    return this.students.length;
  }

  getTotalMales(){
    return this.students.filter(student => student.gender === 'Male').length;
  }
  getTotalFemales(){
    return this.students.filter(student =>student.gender === 'Female').length;
  }
}
