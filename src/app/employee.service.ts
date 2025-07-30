import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private apiUrl= `${environment.apiUrl}/Employee`;
   constructor(private http :HttpClient) { }

   getEmoployees() :Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
   }


    createEmployee(employee:Employee):Observable<Employee> {
      return this.http.post<Employee>(this.apiUrl, employee);
    }


    deleteEmpolyee(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }


    getEmployeeById(id:number):Observable<Employee>{
      return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    } 

    editEmployee(employee:Employee):Observable<Employee>{
      return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
    }
  }

