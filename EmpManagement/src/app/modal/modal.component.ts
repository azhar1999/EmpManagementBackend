import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{MAT_DIALOG_DATA} from '@angular/material/dialog'
import { IEmp } from '../interface';
import { EmployeeManagementService } from '../service/employee-management.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private inputEmployee:EmployeeManagementService,public dialogRef:MatDialog) { }

  formgroup!:FormGroup;

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      Id: new FormControl('',Validators.required),
      empName: new FormControl('',Validators.required),
      empUser: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      addressInformation: new FormControl('',Validators.required),
      teamName: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required)
     
    });
  }

  submit(){
    const empObject:IEmp={
      empId:this.formgroup.value.Id,
      empName:this.formgroup.value.empName,
      empUsername:this.formgroup.value.empUser,
      password:this.formgroup.value.password,
      addressInformation:this.formgroup.value.addressInformation,
      teamName:this.formgroup.value.teamName,
      phoneNumber:this.formgroup.value.phoneNumber
    }

   
    this.inputEmployee.addEmployee(empObject)
    window.location.reload();
    this.dialogRef.closeAll()
  }


  }


