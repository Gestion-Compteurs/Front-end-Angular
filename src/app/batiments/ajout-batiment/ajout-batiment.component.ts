import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BatimentsDto } from '../../DTOs/BatimentsDto';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";

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
  batiments$ :BatimentsDto = {
    batimentId: 0,
    adresse: "",
    nombreEtages: 0,
    typeBatiment: "",


  }
  AjouterBatiment(): void{
    // Fonction pour ajouter un batiment
  }
}
