import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeCompComponent } from './employee-comp/employee-comp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EmployeeCompComponent,
  
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    ReactiveFormsModule,
    NgbModule
    
  ]
})
export class EmployeeDetailsModule { }
