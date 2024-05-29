import {Component, Inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";
import {Router} from "@angular/router";
import {AdminAuthenticationRequestDto} from "../../DTOs/AdminDto";
import {DOCUMENT, NgIf} from "@angular/common";
import {RegieAuthenticationRequestDto} from "../../DTOs/RegieDto";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent implements OnInit {

  isRegie: boolean = false;

  admin: AdminAuthenticationRequestDto = {
    email : '',
    password : '',
    regieId: 0
  }

  regie: RegieAuthenticationRequestDto = {
    email : '',
    password : '',
    regieId: 0
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _router: Router,
    private _service: AuthRegisterService
  ) {
  }

  ngOnInit(){
    // Si l'utilisateur est authentifié, ne pas le laisser revenir en arrière
    if(this._service.isLoggedIn()) this._router.navigate(["/agents"]).then(r => {
      alert("Vous êtes déjà authentifié")
    })
  }

  setIsRegie(){
    this.isRegie = !this.isRegie
  }

  loginAdmin(){
    this._service.loginAdmin(this.admin).subscribe({
      next : (response: any) => {
        console.log(this.admin)
        console.log("Access token :"+ response.accessToken)
        localStorage.setItem("accessToken",response.accessToken)
        alert("Utilisateur authentifié avec succès !!")
        this._router.navigate(["/agents"]).then(r => {
          console.log("Utilisateur rédirigé vers la page de gestions de agents !!")
        })
      },
      error : ()=>{
        console.log(this.admin)
        alert("Le mot de passe ou le nom d'utilisateur est incorrect")
        console.log("Une erreur s'est produite !!")
      }
    })
  }
  loginRegie(){
    this._service.loginRegie(this.regie).subscribe({
      next : (response: any) => {
        console.log(this.regie)
        console.log("Access token :"+ response.accessToken)
        localStorage.setItem("accessToken",response.accessToken)
        alert("Utilisateur authentifié avec succès !!")
        this._router.navigate(["/regies"]).then(r => {
          console.log("Utilisateur rédirigé vers la page de gestions de administrateurs !!")
        })
      },
      error : ()=>{
        console.log(this.regie)
        alert("Le mot de passe ou le nom d'utilisateur est incorrect")
        console.log("Une erreur s'est produite !!")
      }
    })
  }
}
