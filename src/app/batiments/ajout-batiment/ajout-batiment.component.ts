import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BatimentsDto } from '../../DTOs/BatimentsDto';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {AjoutBatimentDto} from "../../DTOs/BatimentDto";
import {BatimentsService} from "../../services/batiments/batiments.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-ajout-batiment',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        CustomNavbarComponent
    ],
  templateUrl: './ajout-batiment.component.html',
  styleUrl: './ajout-batiment.component.css'
})
export class AjoutBatimentComponent {
  constructor(
    private _service : BatimentsService,
    private _router: Router
  ) {
  }
  batiments$ : AjoutBatimentDto = {
    adresse: "",
    nombreEtages: 0,
    typeBatiment: "",
  }
  AjouterBatiment(): void{
    // Fonction pour ajouter un batiment
    this._service.ajouterBatiment(this.batiments$).subscribe({
      next : value => {
        console.log(`Bâtiment ajouté : ${value}`)
        this._router.navigate(['/batiments']).then(r =>
          console.log("Bâtiment ajouté avec succès et redirection effectuée !!")
        )
      },
      error : err => {
        alert("Il y'a eu une erreur lors de l'ajout du bâtiment !")
      }
    })
  }
}
