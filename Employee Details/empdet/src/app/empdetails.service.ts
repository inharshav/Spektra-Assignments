import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdetailsService {

  employees= [
    {slno: 1, id:101, name:'Akash', email: 'akash123@gmail.com'},
    {slno: 2, id:102, name:'Abhishek', email: 'abhishek546@gmail.com'},
    {slno: 3, id:103, name:'Bhavana', email: 'bhavana234@gmail.com'},
    {slno: 4, id:104, name:'Ajay', email: 'aj999@gmail.com'},
    {slno: 5, id:105, name:'Deepak', email: 'deepakraj34@gmail.com'}
  ]

  constructor() { }

  getEmployees(){
    return this.employees;
  }
}

