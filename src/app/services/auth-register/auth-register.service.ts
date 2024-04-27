import {Inject, inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AdminAuthenticationDto, AdminAuthenticationResponseDto, AdminRegistrationDto} from "../../DTOs/AdminDto";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  private http = inject(HttpClient)

  // Le chemin vers l'API ASP.NET
  apiUrl:string = "http://localhost:5163"

  constructor(private _router: Router, @Inject(DOCUMENT) private document: Document) {

  }

  registerUser(user:AdminRegistrationDto) : Observable<AdminRegistrationDto>  {
    return this.http.post<AdminRegistrationDto>(`${this.apiUrl}/register`,user)
  }

  loginUser(user:AdminAuthenticationDto) : Observable<AdminAuthenticationResponseDto>  {
    return this.http.post<AdminAuthenticationResponseDto>(`${this.apiUrl}/login`,user)
  }

  logoutUser(){
    const localStorage = document.defaultView?.localStorage;
    if(localStorage){
      localStorage.setItem("accessToken","")
    }
    this._router.navigate(['']).then(r =>{
      alert("Utilisateur déconnecté")
    })
  }

  isLoggedIn(){
    let authenticated = localStorage.getItem("accessToken");
    return !(authenticated == null || authenticated == "");
  }
}
