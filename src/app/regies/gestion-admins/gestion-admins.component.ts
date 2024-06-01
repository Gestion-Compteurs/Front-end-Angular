import { Component } from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {NgForOf} from "@angular/common";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {RegieNavbarComponent} from "../../components/regie-navbar/regie-navbar.component";
import {AdminInListAllAdminsDto} from "../../DTOs/RegieDto";
import {RegiesService} from "../../services/regies/regies.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-gestion-admins',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RegieNavbarComponent
  ],
  templateUrl: './gestion-admins.component.html',
  styleUrl: './gestion-admins.component.css'
})
export class GestionAdminsComponent {
  // Les administrateurs à lister
  adminsList!: AdminInListAllAdminsDto[]
  // L'identifiant de la régie
  regieId : number = 0
  constructor(
    private _service: RegiesService
  ) {
    let regieIdStored : any = localStorage.getItem("regieId");
    this.regieId = parseInt(regieIdStored,10)
    this.listAllAdmins(regieIdStored)
  }

  // Lister les administrateurs de la régie
  listAllAdmins(regieId: number){
    this._service.listAllRegiesAdmins(regieId).subscribe({
      next: value => {
        this.adminsList = value
        console.log(`La liste des administrateurs retrouvés`)
      },
      error : err => {
        console.log(`Une erreur s'est produite dans le listage des agents de la régie ${err}`)
      }
    })
  }
  // Bloquer un compte d'un administrateur
  lockAdmin(regieId: number, adminId: number){
    this._service.lockAdminAccount(regieId,adminId).subscribe({
      next: value => {
        this.listAllAdmins(regieId)
        alert(`Compte administrateur avec l'identifiant ${adminId} désactivé`)
      },
      error : err => {
        console.log(`Une erreur s'est produite dans le blocage du compte administrateur : ${err}`)
      }
    })
  }
  // Débloquer un compte d'un administrateur
  unlockAdmin(regieId: number, adminId: number){
    this._service.unlockAdminAccount(regieId,adminId).subscribe({
      next: value => {
        this.listAllAdmins(regieId)
        alert(`Compte administrateur avec l'identifiant ${adminId} activé`)
      },
      error : err => {
        console.log(`Une erreur s'est produite dans le déblocage du compte administrateur : ${err}`)
      }
    })
  }
}
