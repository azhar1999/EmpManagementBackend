import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmp, ITeam } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getArray:any[]=[]
  empArray:IEmp[]=[];
  teamArray:ITeam[]=[];

  constructor() { }

  getAllEmployee():Observable<any>{

  this.getArray = JSON.parse(localStorage.getItem('employeeList') || '{}')
  return of(this.getArray)

  }

  getCurrentEmployee():Observable<any>{

  this.empArray = JSON.parse(localStorage.getItem('currentUser') || '{}')
  return of(this.empArray)

  }

  getTeamName():Observable<any>{
    
    this.teamArray = JSON.parse(localStorage.getItem('teamList') || '{}')
    return of(this.teamArray)

  }
}
