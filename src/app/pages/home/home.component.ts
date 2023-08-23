import { Component, OnInit } from '@angular/core';
import { EmployeserviceService } from 'src/app/services/employeservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeData:any=[];
  constructor(private router:Router,private employeServie:EmployeserviceService,private snack:MatSnackBar) {

    this.employeServie.getEmployeData().subscribe(data=>{
      this.employeData=data;
      console.log(data);
    })
     



   }
  ngOnInit(): void {
  }

 
}
