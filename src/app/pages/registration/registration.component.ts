import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeserviceService } from 'src/app/services/employeservice.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private employeServie:EmployeserviceService,private snack:MatSnackBar) { }
  public employee={
    firstName:'',
    lastName :'',
    email :'',
    phone:'',
    profile:''
  }
  ngOnInit(): void {
  }
  RegistrationSumbit(){
    if(this.employee.firstName=='' || this.employee.firstName==null)
  {
    this.snack.open('FirstName is required..!','',{
      duration:800,
      verticalPosition:'top'
   });
    return;
  }
  if(this.employee.lastName=='' || this.employee.lastName==null)
  {
    this.snack.open('LastName is required..!','',{
      duration:800,
      verticalPosition:'top'
   });
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let result=emailRegex.test(this.employee.email);
  if(result==false){
    this.snack.open('Email Invalid','',{
      duration:800,
      verticalPosition:'top'
   });
    return;
  }
   
  if(this.employee.phone=='' || this.employee.phone==null)
  {
    this.snack.open('Phone Number is required..!','',{
      duration:800,
      verticalPosition:'top'
   });
    return;
  }

 //add user
 this.employeServie.addEmployee(this.employee).subscribe((data:any)=>{

  console.log(data);
  Swal.fire('Success','Registration Successfully done with ID='+data.id,'success')
 

 },(error)=>{
   console.log(error);
  Swal.fire('Error','Something went wrong..!!','error')
  
 }
 
 )


}
clearPage(){
  this.employee.firstName='';
  this.employee.lastName='';
  this.employee.email='';
  this.employee.phone='';
  this.employee.profile='';
}


  
}
