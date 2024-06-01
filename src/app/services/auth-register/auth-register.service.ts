import {Inject, inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {
  AdminAuthenticationRequestDto,
  AdminAuthenticationResponseDto,
  AdminRegistrationRequestDto,
  AdminRegistrationResponseDto
} from "../../DTOs/AdminDto";
import {identityServiceAddress, administrateurServiceAddress} from "../../environnement";
import {DOCUMENT} from "@angular/common";
import {RegieAuthenticationRequestDto, RegieAuthenticationResponseDto} from "../../DTOs/RegieDto";

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  private http = inject(HttpClient)

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  registerAdmin(user:AdminRegistrationRequestDto) : Observable<AdminRegistrationResponseDto>  {
    return this.http.post<AdminRegistrationResponseDto>(`${administrateurServiceAddress}/register`,user)
  }

  loginAdmin(user:AdminAuthenticationRequestDto) : Observable<AdminAuthenticationResponseDto>  {
    return this.http.post<AdminAuthenticationResponseDto>(`${identityServiceAddress}/authenticateAdminAndGetAccessToken`,user)
  }

  loginRegie(regieAuthenticationRequestDto:RegieAuthenticationRequestDto) : Observable<RegieAuthenticationResponseDto>  {
    return this.http.post<RegieAuthenticationResponseDto>(`${identityServiceAddress}/authenticateRegieAndGetAccessToken`,regieAuthenticationRequestDto)
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
