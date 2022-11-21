import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  formgroup !: FormGroup;
  
  invalidLogin!:boolean 
  credentials:any={
    username:'',
    password:''}
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      
    });

    this.authService.logginOb.subscribe((response)=>{
      if(response){
        this.router.navigate(['/employeeList',this.formgroup.value.username])
        
      }
    })
  }
  submit():any{
    
    this.credentials.username=this.formgroup.value.username
    this.credentials.password=this.formgroup.value.password
    this.authService.loginAuth(this.credentials.username,this.credentials.password)

  
  }

}
