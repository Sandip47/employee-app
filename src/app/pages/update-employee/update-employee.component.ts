import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeserviceService } from 'src/app/services/employeservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeServie:EmployeserviceService,private snack:MatSnackBar) { }
  public employee={
    id :'',
    firstName:'',
    lastName :'',
    email :'',
    phone:'',
    profile:''
  }
  ngOnInit(): void {
  }
  UpdateRegistrationSumbit(){

 //add user
 this.employeServie.updateEmployee(this.employee).subscribe((data:any)=>{

  console.log(data);
  Swal.fire('Success','Update Registration Successfully done with ID='+data.id,'success')
 

 },(error)=>{
   console.log(error);
  Swal.fire('Error','Something went wrong..!!','error')
  
 })
}
clearPage(){
  this.employee.firstName='';
  this.employee.lastName='';
  this.employee.email='';
  this.employee.phone='';
  this.employee.id='';
  this.employee.profile='';
}
}
