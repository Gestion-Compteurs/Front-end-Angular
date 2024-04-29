import { Component } from '@angular/core';
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {CompteurDto} from "../../DTOs/CompteurDto";

@Component({
  selector: 'app-liste-compteurs',
  standalone: true,
  imports: [],
  templateUrl: './liste-compteurs.component.html',
  styleUrl: './liste-compteurs.component.css'
})
export class ListeCompteursComponent {
  ngOnInit() {
    // Remplir la liste des compteurs

  }

  // La liste des compteurs à afficher
  agents: CompteurDto[] = [
    {
      compteurId : 0,
      marque: "Ingelec",
      type : "type1",
      capacite: 15
    },
    {
      compteurId : 1,
      marque: "Montelec",
      type : "type2",
      capacite: 20
    },
    {
      compteurId : 3,
      marque: "Montelec",
      type : "type3",
      capacite: 25
    }
  ]


}
