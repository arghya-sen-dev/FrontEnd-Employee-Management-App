import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../Models/employee';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
employees:Employee[] = [];
constructor(private employeeService: EmployeeService,private router:Router) {}

ngOnInit(){
  this.employeeService.getEmoployees().subscribe((data:Employee[])=>{
    this.employees = data;
    console.log(data);
  });
}
 deleteEmployee(id:number):void{
  this.employeeService.deleteEmpolyee(id).subscribe( {
    next:()=>{
      this.employees = this.employees.filter(employee => employee.id !== id);
    },
    error:(err)=>{
      console.error('Error deleting employee:', err);
    }
  }
 );
}

editEmployee(id:number):void{
this.router.navigate(['/edit', id]);
}
}

