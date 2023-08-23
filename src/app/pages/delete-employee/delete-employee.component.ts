import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeserviceService } from 'src/app/services/employeservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  isDeleted: boolean = false;
  constructor(private employeServie:EmployeserviceService,private snack:MatSnackBar) { }
  public employee={
    id :'',
  }
  ngOnInit(): void {
  }
  deleteEmployeeSumbit(){
    
    this.employeServie.deleteEmployee(this.employee).subscribe(
      (data:any) => {
        this.isDeleted = true;
        Swal.fire('Delete','Employee Deleted','success')
      },
      error => {
        console.error('Error deleting employee:', error);
        Swal.fire('Error','Something went wrong..!!','error')
      }
    );
  }
}
