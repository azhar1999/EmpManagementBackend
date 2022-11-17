import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeCompComponent } from './employee-comp/employee-comp.component';


@NgModule({
  declarations: [
    EmployeeCompComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule { }
