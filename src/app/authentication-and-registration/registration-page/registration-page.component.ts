import {Component, inject, OnInit} from '@angular/core';
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";
import {Router} from "@angular/router";
import {AdminRegistrationDto} from "../../DTOs/AdminDto";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent implements OnInit {

  _service: AuthRegisterService = inject(AuthRegisterService)
  _router: Router = inject(Router)

  user: AdminRegistrationDto = {
    Nom:'',
    Prenom:'',
    DateDeNaissance:new Date(),
    email: '',
    password: '',
    Confirmpassword:'',
  };

  constructor() {
  }

  ngOnInit() {
    // Si l'utilisateur est authentifié, ne pas le laisser revenir en arrière
    if (this._service.isLoggedIn()) this._router.navigate(["/products"]).then(r => {
      console.log("Vous êtes déjà authentifié")
    })
  }

  registerUser() {
    this._service.registerUser(this.user).subscribe({
      next: () => {
        console.log(this.user)
        console.log("Utilisateur inscrit avec succès !!")
        this._router.navigate(["/auth"]).then(() => {
          console.log("Utilisateur rédirigé vers la page d'authentification !!")
        })
      },
      error: () => {
        console.log(this.user)
        console.log("Une erreur s'est produite !!")
      }
    })
  }
}
