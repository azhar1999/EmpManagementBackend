import { Component } from '@angular/core';
import { IEmp, ITeam } from './interface';
import { AuthService } from './service/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpManagement';
  
  constructor(private authService:AuthService){}



  empArray:IEmp[]=[];
  teamArray:ITeam[]=[];
  

  ngOnInit(): void {

    localStorage.removeItem('currentUser');

  }




  logout(){
    this.authService.logout()
  }

  isLoggedIn(){
     return (this.authService.isLoggedIn())
  }
}
