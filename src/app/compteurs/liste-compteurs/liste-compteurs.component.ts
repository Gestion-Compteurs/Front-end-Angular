import { Component } from '@angular/core';
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {CompteurDto} from "../../DTOs/CompteurDto";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {NgForOf} from "@angular/common";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {RouterLink} from "@angular/router";
import {CompteursService} from "../../services/compteurs/compteurs.service";

@Component({
  selector: 'app-liste-compteurs',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RouterLink
  ],
  templateUrl: './liste-compteurs.component.html',
  styleUrl: './liste-compteurs.component.css'
})
export class ListeCompteursComponent {
  constructor(
    private _service: CompteursService
  ) {
    // Remplir la liste des compteurs, créer une fonction listerCompteurs() dans le service
  }

  // La liste des compteurs à afficher
  compteurs: CompteurDto[] = [
    {
      compteurId : 0,
      marque: "Ingelec",
      modele : "type1",
      voltageMax: 15,
      nombreCadran: 8,
    },
    {
      compteurId : 1,
      marque: "Montelec",
      modele : "type2",
      voltageMax: 20,
      nombreCadran: 12,
    },
    {
      compteurId : 3,
      marque: "Montelec",
      modele : "type3",
      voltageMax: 25,
      nombreCadran: 22,
    }
  ]
  deleteCompteur(compteurId:number){

  }

}
