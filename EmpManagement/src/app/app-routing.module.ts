import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)

  },
  {
      path: 'employeeList/:username', loadChildren: () => import('./employee-details/employee-details.module').then(m => m.EmployeeDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
