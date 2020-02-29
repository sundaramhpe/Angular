import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-lists',
  templateUrl: './employee-lists.component.html',
  styleUrls: ['./employee-lists.component.css']
})
export class EmployeeListsComponent implements OnInit {

  public employees =[];
  constructor(private _employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe((response)=>{this.employees = response;
    console.log(this.employees)});

  }
}
