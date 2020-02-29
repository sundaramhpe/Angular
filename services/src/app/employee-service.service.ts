import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  public employee =[];
  private _urls="http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http:HttpClient) { 

  }
  getEmployee():Observable<IEmployee[]>{
    return  this.http.get<IEmployee[]>(this._urls);
    
    }
    
 
}
