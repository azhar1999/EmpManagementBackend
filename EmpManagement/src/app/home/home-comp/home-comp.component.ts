import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IEmp, ITeam } from 'src/app/interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {


  constructor(private router:Router,private getlocal:LocalStorageService) { }

   empArray: IEmp[]=[];
   teamArray:ITeam[]=[];
   teamName:any;
   

  ngOnInit(): void {

  //   forkJoin([
  //     this.getlocal.getAllEmployee(),
  //     this.getlocal.getTeamName()
  //   ]).subscribe(([employeeArray, teamarray]) => {
   
  //   this.empArray=employeeArray
  //   this.teamArray=teamarray})

  // }
  // clickCard(emp:any){

  //   this.router.navigate(['/employeeList',emp.empUsername])

  // }

}
}
