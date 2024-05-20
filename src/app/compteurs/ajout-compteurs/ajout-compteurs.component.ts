
import { FormsModule } from '@angular/forms';
import { CompteurDto } from '../../DTOs/CompteurDto';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {CompteursService} from "../../services/compteurs/compteurs.service";

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
  compteur$ :CompteurDto = {
    compteurId: 0,
    marque: "",
    modele: "",
    voltageMax: 0,
    nombreCadran:0,
  }
  constructor(
    private _service: CompteursService
  ) {
  }

  AjouterCompteur(): void{
    // Fonction pour ajouter un compteur
  }
}
