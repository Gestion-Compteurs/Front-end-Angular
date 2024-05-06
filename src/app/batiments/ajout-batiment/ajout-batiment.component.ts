import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BatimentsDto } from '../../DTOs/BatimentsDto';

@Component({
  selector: 'app-ajout-batiment',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './ajout-batiment.component.html',
  styleUrl: './ajout-batiment.component.css'
})
export class AjoutBatimentComponent {
  batiments$ :BatimentsDto = {
    batimentId: 0,
    adresse: "",
    nombre_etages: 0,
    type_batiment: "",
    

  }
  AjouterBatiment(): void{
    // Fonction pour ajouter un batiment
  }
}
