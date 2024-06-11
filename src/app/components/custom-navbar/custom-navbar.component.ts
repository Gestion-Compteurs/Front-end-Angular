import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthRegisterService} from "../../services/auth-register/auth-register.service";

@Component({
  selector: 'app-custom-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './custom-navbar.component.html',
  styleUrl: './custom-navbar.component.css'
})
export class CustomNavbarComponent {
  constructor(private _service: AuthRegisterService, private _router : Router) {
  }

  logoutUser(){
    this._service.logoutUser()
    this._router.navigate(["/auth"]).then(r => {
      console.log("Utilisateur déconnecté")
    })
  }

}
