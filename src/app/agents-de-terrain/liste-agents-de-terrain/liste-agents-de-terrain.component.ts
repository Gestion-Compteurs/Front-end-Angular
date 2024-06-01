import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {RouterLink} from "@angular/router";
import {ListerAgentDeTerrainResponseDto, RegisterAgentDeTerrainRequestDto} from "../../DTOs/AgentDeTerrainDto";
import {NgForOf} from "@angular/common";
import { AgentsDeTerrainService } from '../../services/agents-de-terrain/agents-de-terrain.service';

@Component({
  selector: 'app-liste-agents-de-terrain',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    SidenavComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './liste-agents-de-terrain.component.html',
  styleUrl: './liste-agents-de-terrain.component.css'
})
export class ListeAgentsDeTerrainComponent {
  constructor(
    private _service: AgentsDeTerrainService
  ) {
    this.retrouverListeAgentsDeTerrain()
  }
  

  // La liste des agents à afficher
  agents$!: ListerAgentDeTerrainResponseDto[] 
  
  
  retrouverListeAgentsDeTerrain(){
    this._service.listerAgentsDeTerrain().subscribe({
      next: value => {
        this.agents$ = value
      },
      error: err => {
        console.log(`Une erreur s"est produite dans le listage des agents de terrain ${err}`)
      }
    })
  }
  // Fonction pour supprimer les agents
  deleteAgentDeTerrain(agentId:number){

  this._service.supprimerAgentDeTerrain(agentId).subscribe({
    next: value => {
      console.log(`Agent de terrain supprimé avec succès: ${value}`)
      this.retrouverListeAgentsDeTerrain()
    },
    error: err => {
      console.log(`Une erreur s'est produite pendant la suppression de l'agent de terrain : ${err}`)
    }
  })
}


}
