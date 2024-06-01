import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  ListerAgentDeTerrainResponseDto, ModifierAgentDeTerrainResponseDto, RechercherAgentDeTerrainResponseDto,
  RegisterAgentDeTerrainRequestDto,
  RegisterAgentDeTerrainResponseDto
} from "../../DTOs/AgentDeTerrainDto";
import {Observable} from "rxjs";
import {agentsServiceAddress} from "../../environnement";
import {ModifierCompteurDto} from "../../DTOs/CompteurDto";

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
  listerAgentsDeTerrain(): Observable<ListerAgentDeTerrainResponseDto[]>{
    return this.http.get<ListerAgentDeTerrainResponseDto[]>(`${agentsServiceAddress}`)
  }
  // Rechercher un agent de terrain
  rechercherAgentDeTerrain(agentId: number): Observable<RechercherAgentDeTerrainResponseDto>{
    return this.http.get<RechercherAgentDeTerrainResponseDto>(`${agentsServiceAddress}/${agentId}`)
  }
  // Modifier un agent de terrain
  modifierAgentDeTerrain(agent: ModifierAgentDeTerrainResponseDto, agentId: number) : Observable<RechercherAgentDeTerrainResponseDto>{
    return this.http.put<RechercherAgentDeTerrainResponseDto>(`${agentsServiceAddress}/${agentId}`,agent)
  }
  // Supprimer un agent de terrain
  supprimerAgentDeTerrain(agentId: number): Observable<boolean>{
    return this.http.delete<boolean>(`${agentsServiceAddress}/${agentId}`)
  }
}
