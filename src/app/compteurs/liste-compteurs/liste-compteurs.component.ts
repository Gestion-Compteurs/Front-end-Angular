import { Component } from '@angular/core';
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {CompteurDto} from "../../DTOs/CompteurDto";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {NgForOf} from "@angular/common";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {RouterLink} from "@angular/router";

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
  ngOnInit() {
    // Remplir la liste des compteurs

  }

  // La liste des compteurs à afficher
  compteurs: CompteurDto[] = [
    {
      compteurId : 0,
      marque: "Ingelec",
      type : "type1",
      capacite: 15,
      nombreCadran: 8,
    },
    {
      compteurId : 1,
      marque: "Montelec",
      type : "type2",
      capacite: 20,
      nombreCadran: 12,
    },
    {
      compteurId : 3,
      marque: "Montelec",
      type : "type3",
      capacite: 25,
      nombreCadran: 22,
    }
  ]


}
