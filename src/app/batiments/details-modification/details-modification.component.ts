import { Component, OnInit } from '@angular/core';
import { BatimentsDto } from '../../DTOs/BatimentsDto';
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AjoutBatimentDto} from "../../DTOs/BatimentDto";
import {BatimentsService} from "../../services/batiments/batiments.service";
@Component({
  selector: 'app-details-modification',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    CustomNavbarComponent
  ],
  templateUrl: './details-modification.component.html',
  styleUrl: './details-modification.component.css'
})
export class DetailsModificationComponent implements OnInit{
  // C'est pas la peine de toucher ce fichier pour le moment
  ngOnInit(): void {
  }
  // le batiment à modifier
  constructor(
    private _service: BatimentsService
  ) {
    // Il faut remplacer le bâtiment en dur par le bâtiment retrouvé depuis l'api
  }

  batiment$ :AjoutBatimentDto = {
    adresse: "",
    nombreEtages: 0,
    typeBatiment: "",
  }
  updateBatiment(): void{
    // Fonction pour modifier un batiment
  }
}
