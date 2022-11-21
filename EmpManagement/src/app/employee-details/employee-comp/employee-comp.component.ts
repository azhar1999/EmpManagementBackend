import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmp } from 'src/app/interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { EmployeeManagementService } from 'src/app/service/employee-management.service';
import { AnchorUISref } from '@uirouter/angular';
import { ModalService } from 'src/app/service/modal.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';


@Component({
  selector: 'app-employee-comp',
  templateUrl: './employee-comp.component.html',
  styleUrls: ['./employee-comp.component.css']
})
export class EmployeeCompComponent implements OnInit {


  getEmp: any;
  jwtToken: any;
  empName!: string;
  teamName!: string;
  currEmp!: any;

  constructor(private route: ActivatedRoute, private getlocal: LocalStorageService, private getEmployee: EmployeeManagementService,
    private el: ElementRef, public modal: ModalService,public dialogRef:MatDialog) { }

  ngOnInit(): void {

    const serviceHelper = new JwtHelperService()
    this.getlocal.getCurrentEmployee().subscribe((jwtToken) => {
      const decodedToken = serviceHelper.decodeToken(jwtToken)
      if ((decodedToken.role === 'admin') || (decodedToken.role == 'HR')) {
        this.teamName = 'main'
        this.empName = decodedToken.unique_name
        this.getEmployee.getAllEmp().subscribe((Emplist) => {
          this.getEmp = Emplist
          for (var emp of this.getEmp) {
            if (emp.empUsername == this.empName) {
              this.currEmp = emp
            }
          }
        })
      }
      else {
        this.teamName = 'others'
        this.empName = decodedToken.unique_name
        this.getEmployee.getEmpUsername(this.empName).subscribe((Emplist) => {
          this.currEmp = Emplist
        })
      }
    })
  }
  
  openDialog(){
    this.dialogRef.open(ModalComponent)

  }
}












