import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmp, ITeam } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  user!:string;

  constructor() { }

  // getAllEmployee():Observable<any>{

  // this.getArray = JSON.parse(localStorage.getItem('employeeList') || '{}')
  // return of(this.getArray)

  // }

  getCurrentEmployee():Observable<any>{

  this.user = JSON.parse(localStorage.getItem('currentUserToken') || '{}')
  
  
  return of(this.user)

  }

  // getTeamName():Observable<any>{
    
  //   this.teamArray = JSON.parse(localStorage.getItem('teamList') || '{}')
  //   return of(this.teamArray)

  // }
}
