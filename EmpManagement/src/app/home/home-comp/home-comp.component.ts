import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IEmp, ITeam } from 'src/app/interface';
import { LocalStorageServiceService } from 'src/app/local-storage-service.service';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {


  constructor(private router:Router,private getlocal:LocalStorageServiceService) { }

   empArray: IEmp[]=[];
   teamArray:ITeam[]=[];
   teamName:any;
   

  ngOnInit(): void {

    forkJoin([
      this.getlocal.getAllEmployee(),
      this.getlocal.getTeamName()
    ]).subscribe(([employeeArray, teamarray]) => {
   
    this.empArray=employeeArray
    this.teamArray=teamarray})

  }
  clickCard(emp:any){

    this.router.navigate(['/employeeList',emp.empUsername])

  }

}
