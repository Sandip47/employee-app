import { Injectable } from '@angular/core';
import baseUrl from './Helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeserviceService {

  constructor(private http:HttpClient) { }

  public getEmployeData(){
    let url="http://localhost:8080/employee/";
    return this.http.get(url);
  }
 
  public addEmployee(employee:any){
    return this.http.post(`${baseUrl}/employee/`,employee);
   }

   public updateEmployee(employee:any)
   {
    return this.http.put(`${baseUrl}/employee/update/${employee.id}`,employee);
   }

   public deleteEmployee(employee:any)
   {
    return this.http.delete(`${baseUrl}/employee/delete/${employee.id}`,employee);
   }
}
