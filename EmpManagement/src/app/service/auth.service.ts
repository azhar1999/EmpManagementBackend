import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginSubject$ = new BehaviorSubject(false);
  public logginOb = this.loginSubject$.asObservable();
  jwtToken: any;


  constructor(private httpClient: HttpClient) { }


  loginAuth(username: string, password: string) {
    const serviceHelper = new JwtHelperService()
    this.httpClient.post('https://localhost:7268/api/New', { username, password }, { responseType: 'text' }).subscribe(response => {
      this.jwtToken = response;
      localStorage.setItem('currentUserToken', JSON.stringify(this.jwtToken));
      this.loginSubject$.next(true);
    },
      error => {
        this.loginSubject$.next(false);
        console.log("error");
      }
    )

  }

  logout() {
    this.loginSubject$.next(false);
    localStorage.removeItem('currentUserToken')
  }

  isLoggedIn(){

    let log = localStorage.getItem('currentUserToken')
    if(!log){
      return false
    }

    else{
      return true

    }

  }


}
