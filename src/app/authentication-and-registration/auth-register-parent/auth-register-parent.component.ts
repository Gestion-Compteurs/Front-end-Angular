import {Component, OnInit} from '@angular/core';
import {AuthenticationPageComponent} from "../authentication-page/authentication-page.component";
import {RegistrationPageComponent} from "../registration-page/registration-page.component";
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth-register-parent',
  standalone: true,
  imports: [
    AuthenticationPageComponent,
    RegistrationPageComponent,
    NgIf
  ],
  templateUrl: './auth-register-parent.component.html',
  styleUrl: './auth-register-parent.component.css'
})
export class AuthRegisterParentComponent implements OnInit{

  haveAccount: boolean = true;

  constructor(private _service: AuthRegisterService, private _router:Router) {
  }
  switchPage() : void {
    this.haveAccount = !this.haveAccount
  }

  ngOnInit(){
    // Si l'utilisateur est authentifié, ne pas le laisser revenir en arrière
    if(this._service.isLoggedIn()) this._router.navigate(["/agents"]).then(r => {
      alert("Vous êtes déjà authentifié")
    })
  }

}
