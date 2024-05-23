
import { FormsModule } from '@angular/forms';
import {AjouterCompteurDto, CompteurDto} from '../../DTOs/CompteurDto';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {CompteursService} from "../../services/compteurs/compteurs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-compteurs',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        CustomNavbarComponent
    ],
  templateUrl: './ajout-compteurs.component.html',
  styleUrl: './ajout-compteurs.component.css'
})
export class AjoutCompteursComponent {
  compteur$! :AjouterCompteurDto
  constructor(
    private _service: CompteursService,
    private _router: Router
  ) {
  }
  ajouterCompteur(): void{
    this._service.ajouterCompteur(this.compteur$).subscribe({
      next: value => {
        this._router.navigate(['/compteurs'])
          .then(r=>{
            console.log(`Un nouveau compteur à été ajouté à la base de données ${JSON.stringify(value)}`)
          })
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de l'ajout du compteur : ${err}`)
      }
    })
  }
}
