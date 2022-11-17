import { Component } from '@angular/core';
import { IEmp, ITeam } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpManagement';
  
  constructor(){}

  empArray:IEmp[]=[];
  teamArray:ITeam[]=[];
  

  ngOnInit(): void {

    this.empArray.push({empId:1,empUsername:"azhar12",empName:"azhar",teamNumber:1,phoneNumber:9544329386,addressInformation:"kozhikode",password:"azhar1999"})
    this.empArray.push({empId:2,empUsername:"athila12",empName:"athila",teamNumber:2,phoneNumber:9933445588,addressInformation:"kottayam",password:"athila1999"})
    this.empArray.push({empId:3,empUsername:"akhsay12",empName:"akshay",teamNumber:3,phoneNumber:9933447788,addressInformation:"trivandrum",password:"poos2001"})
    this.empArray.push({empId:4,empUsername:"aysha12",empName:"aysha",teamNumber:4,phoneNumber:9933446699,addressInformation:"kozhikode",password:"aysha2000"})
    this.empArray.push({empId:5,empUsername:"hanan12",empName:"hanan",teamNumber:5,phoneNumber:9933557788,addressInformation:"thrissur",password:"hanan1999"})
    this.empArray.push({empId:6,empUsername:"sreeram12",empName:"sreeram",teamNumber:6,phoneNumber:9933446688,addressInformation:"trivandrum",password:"sreeram2000"})
    this.empArray.push({empId:7,empUsername:"sharron12",empName:"sharron",teamNumber:7,phoneNumber:9922446688,addressInformation:"kollam",password:"sharron2000"})

   this.teamArray.push({teamNumber:1,teamName:"Engineering"})
   this.teamArray.push({teamNumber:2,teamName:"Implementation"})
   this.teamArray.push({teamNumber:3,teamName:"Product"})
   this.teamArray.push({teamNumber:4,teamName:"Support"})
   this.teamArray.push({teamNumber:5,teamName:"TOPS"})
   this.teamArray.push({teamNumber:6,teamName:"ITSupport"})
   this.teamArray.push({teamNumber:7,teamName:"HR"})
   this.teamArray.push({teamNumber:8,teamName:"Admin"})



    localStorage.setItem('employeeList',JSON.stringify(this.empArray));
    localStorage.setItem('teamList',JSON.stringify(this.teamArray));
    localStorage.removeItem('currentUser');

  }



  // logout(){
  //   this.authService.logout()
  // }

  // isLoggedIn(){
  //    return (this.authService.isLoggedIn())
  // }
}
