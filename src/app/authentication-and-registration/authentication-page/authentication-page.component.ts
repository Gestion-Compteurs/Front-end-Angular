import {Component, Inject, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";
import {Router} from "@angular/router";
import {AdminAuthenticationDto} from "../../DTOs/AdminDto";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent {
  _service: AuthRegisterService = inject(AuthRegisterService)
  _router: Router = inject(Router)

  user: AdminAuthenticationDto = {
    email : '',
    password : ''
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(){
    // Si l'utilisateur est authentifié, ne pas le laisser revenir en arrière
    if(this._service.isLoggedIn()) this._router.navigate(["/agents"]).then(r => {
      alert("Vous êtes déjà authentifié")
    })
  }
  loginUser(){
    this._service.loginUser(this.user).subscribe({
      next : (response: any) => {
        console.log(this.user)
        console.log("Access token :"+ response.accessToken)
        console.log("Refresh token :"+ response.refreshToken)
        localStorage.setItem("accessToken",response.accessToken)
        localStorage.setItem("refreshToken",response.accessToken)
        alert("Utilisateur authentifié avec succès !!")
        this._router.navigate(["/agents"]).then(r => {
          console.log("Utilisateur rédirigé vers la page de gestions de agents !!")
        })
      },
      error : ()=>{
        console.log(this.user)
        alert("Le mot de passe ou le nom d'utilisateur est incorrect")
        console.log("Une erreur s'est produite !!")
      }
    })
  }
}
