import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterAgentDeTerrainDto } from '../../DTOs/AgentDeTerrainDto';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsDeTerrainService {


  
    private apiUrl = 'https://localhost:5001/api'; 
  
    constructor(private http: HttpClient) { }
  
    // Options HTTP avec en-têtes
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    // Méthode pour obtenir tous les agents de terrain
    getAgents(): Observable<RegisterAgentDeTerrainDto[]> {
      return this.http.get<RegisterAgentDeTerrainDto[]>(this.apiUrl)
        .pipe(
          catchError(this.handleError<RegisterAgentDeTerrainDto[]>('getAgents', []))
        );
    }
  
    // Méthode pour obtenir un agent de terrain par ID
    getAgent(id: number): Observable<RegisterAgentDeTerrainDto> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<RegisterAgentDeTerrainDto>(url)
        .pipe(
          catchError(this.handleError<RegisterAgentDeTerrainDto>(`getAgent id=${id}`))
        );
    }
  
    // Méthode pour ajouter un nouvel agent de terrain
    addAgent(agent: RegisterAgentDeTerrainDto): Observable<RegisterAgentDeTerrainDto> {
      return this.http.post<RegisterAgentDeTerrainDto>(this.apiUrl, agent, this.httpOptions)
        .pipe(
          catchError(this.handleError<RegisterAgentDeTerrainDto>('addAgent'))
        );
    }
  
    // Méthode pour mettre à jour un agent de terrain existant
    updateAgent(agent: RegisterAgentDeTerrainDto): Observable<any> {
      const url = `${this.apiUrl}/${agent.agentId}`;
      return this.http.put(url, agent, this.httpOptions)
        .pipe(
          catchError(this.handleError<any>('updateAgent'))
        );
    }
  
    // Méthode pour supprimer un agent de terrain par ID
    deleteAgent(id: number): Observable<RegisterAgentDeTerrainDto> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<RegisterAgentDeTerrainDto>(url, this.httpOptions)
        .pipe(
          catchError(this.handleError<RegisterAgentDeTerrainDto>('deleteAgent'))
        );
    }
  
    // Gestion des erreurs
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // Log to console instead
        return of(result as T);
      };
    }
  }
  

