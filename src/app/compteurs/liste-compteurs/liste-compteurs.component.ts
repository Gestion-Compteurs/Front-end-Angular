import { Component } from '@angular/core';
import {RegisterAgentDeTerrainRequestDto} from "../../DTOs/AgentDeTerrainDto";
import {CompteurDto} from "../../DTOs/CompteurDto";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {NgForOf} from "@angular/common";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {RouterLink} from "@angular/router";
import {CompteursService} from "../../services/compteurs/compteurs.service";

@Component({
  selector: 'app-liste-compteurs$',
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
    this.retrouverListeCompteurs()
  }

  // La liste des compteurs$ à afficher
  compteurs$!: CompteurDto[]
  // Retrouver la liste des compteurs
  retrouverListeCompteurs(){
    this._service.listerCompteurs().subscribe({
      next: value => {
        this.compteurs$ = value
      },
      error: err => {
        console.log(`Une erreur s"est produite dans le listage des compteurs ${err}`)
      }
    })
  }
  // Supprimer un compteur
  deleteCompteur(compteurId:number){
    if (confirm("Êtes-vous sûr de vouloir supprimer ce compteur ?")) {
    this._service.supprimerCompteur(compteurId).subscribe({
      next: value => {
        console.log(`Compteur supprimé avec succès: ${value}`)
        this.retrouverListeCompteurs()
      },
      error: err => {
        console.log(`Une erreur s'est produite pendant la suppression du compteur : ${err}`)
      }
      
    })
  }
}
}
