import {Component, OnInit} from '@angular/core';
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";
import {Router} from "@angular/router";
import {AdminRegistrationRequestDto} from "../../DTOs/AdminDto";
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

  admin: AdminRegistrationRequestDto = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
    regieId: 0,
    dateDeNaissance: new Date(),
  };

  constructor(
    private _service: AuthRegisterService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    // Si l'utilisateur est authentifié, ne pas le laisser revenir en arrière
    if (this._service.isLoggedIn()) this._router.navigate(["/products"]).then(r => {
      console.log("Vous êtes déjà authentifié")
    })
  }

  registerAdmin() {
    this._service.registerAdmin(this.admin).subscribe({
      next: () => {
        console.log(this.admin)
        console.log("Utilisateur inscrit avec succès !!")
        this._router.navigate(["/auth"]).then(() => {
          console.log("Utilisateur rédirigé vers la page d'authentification !!")
        })
      },
      error: () => {
        console.log(this.admin)
        console.log("Une erreur s'est produite !!")
      }
    })
  }
}
