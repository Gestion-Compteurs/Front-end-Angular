import { Component } from '@angular/core';
<<<<<<< HEAD
import {Router, RouterLink} from "@angular/router";
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";
=======
import {RouterLink} from "@angular/router";
>>>>>>> nihad3/adding_services

@Component({
  selector: 'app-regie-navbar',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './regie-navbar.component.html',
  styleUrl: './regie-navbar.component.css'
})
export class RegieNavbarComponent {
<<<<<<< HEAD
  constructor(
    private _service: AuthRegisterService,
    private _router: Router) {
  }
  logoutUser(){
    this._service.logoutUser()
    this._router.navigate(["/auth"]).then(r => {
      console.log("Utilisateur déconnecté")
    })
=======
  logoutUser(){

>>>>>>> nihad3/adding_services
  }
}
