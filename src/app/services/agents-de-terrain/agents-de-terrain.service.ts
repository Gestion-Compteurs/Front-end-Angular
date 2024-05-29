import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterAgentDeTerrainRequestDto, RegisterAgentDeTerrainResponseDto} from "../../DTOs/AgentDeTerrainDto";
import {Observable} from "rxjs";
import {agentsServiceAddress} from "../../environnement";

@Injectable({
  providedIn: 'root'
})
export class AgentsDeTerrainService {
  constructor(
    private http: HttpClient
  ) {
  }
  // Ajouter un agent de terrain
  ajouterAgentDeTerrain(agent: RegisterAgentDeTerrainRequestDto): Observable<RegisterAgentDeTerrainResponseDto>{
    return this.http.post<RegisterAgentDeTerrainResponseDto>(`${agentsServiceAddress}`,agent)
  }
  // Lister tous les agents de terrain
  listerAgentsDeTerrain(){

  }
  // Rechercher un agent de terrain
  rechercherAgentDeTerrain(){

  }
  // Modifier un agent de terrain
  modifierAgentDeTerrain(){

  }
  // Supprimer un agent de terrain
  supprimerAgentDeTerrain(){

  }
}
