import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {RouterLink} from "@angular/router";
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {NgForOf} from "@angular/common";

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
export class ListeAgentsDeTerrainComponent implements OnInit{
  ngOnInit() {
    // Remplir la liste des agents

  }

  // La liste des agents à afficher
  agents: RegisterAgentDeTerrainDto[] = [
    {
      agentId: 0,
      nom: "hassane",
      prenom: "mamane",
      cin: "ER567FNS2",
      email: "hassane.mamane017@gmail.com",
      dateDeNaissance: new Date("15-01-1996"),
      civilite: "Monsieur",
      dateEmbauche: new Date("16-01-1996"),
      password: "",
    },
    {
      agentId: 1,
      nom: "houssein",
      prenom: "mamane",
      cin: "ER567ERS2",
      email: "hous.mamane012@gmail.com",
      dateDeNaissance: new Date("15-01-1996"),
      civilite: "Monsieur",
      dateEmbauche: new Date("16-01-1996"),
      password: "",
    }
  ]

  // Fonction pour supprimer les agents
  deleteAgentDeTerrain(agentId:number){

  }



}
