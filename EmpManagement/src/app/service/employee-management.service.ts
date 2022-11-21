import { HttpClient,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  // public EmpList:BehaviorSubject<any> = new BehaviorSubject<any>(null)
  // public Emp = this.EmpList.asObservable();

  constructor(private httpClient: HttpClient) { }


  // getEmp(){
  //   this.httpClient.get("https://localhost:7268/api/New").subscribe((response)=>{
  //     this.EmpList.next(response)
  //     return(true)

  //   })

  // }


  getAllEmp():Observable<any>{
    console.log("getAllEmp");
    return this.httpClient.get<any>("https://localhost:7268/api/New")
  }
  getEmpUsername(username:any){

    
    const params = new HttpParams().set('username', username)
    return this.httpClient.get("https://localhost:7268/api/Employees/username",{params});
  }

  addEmployee(empObject:any){
    console.log(empObject);
    
    
    this.httpClient.post("https://localhost:7268/api/Employees/details",empObject,{responseType:"text"}).subscribe(response=>{
      console.log(response);
      
    })

    
  }
 
}
