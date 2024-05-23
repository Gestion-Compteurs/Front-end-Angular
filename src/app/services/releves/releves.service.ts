import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ajouterReleveDto, confirmerAjoutReleveDto, modifierReleveDto, ReleveDto} from "../../DTOs/ReleveDto";
import {relevesCadransServiceAddress, relevesServiceAddress} from "../../environnement";
import {modifierReleveCadranDto, ReleveCadranDto} from "../../DTOs/ReleveCadranDto";

@Injectable({
  providedIn: 'root'
})
export class RelevesService {
  constructor(
    private http: HttpClient
  ) { }
  // Retrouver une relève et ses relèves des cadrans
  retrouverReleveEtSesRelevesCadrans(releveId: number):Observable<ReleveDto>{
    return this.http.get<ReleveDto>(`${relevesServiceAddress}/trouverReleve/${releveId}`)
  }
  demanderCreationReleve(releveDto: ajouterReleveDto) : Observable<ReleveDto>{
    return this.http.post<ReleveDto>(`${relevesServiceAddress}/ajouterPourInstanceCompteur`,releveDto)
  }
  // Demander l'enregistrement de la relève
  demanderEnregistrementReleve(confirmationCreationReleveDto: confirmerAjoutReleveDto) : Observable<ReleveDto> {
    return this.http.post<ReleveDto>(`${relevesServiceAddress}/confirmerAjouterPourInstanceCompteur`,confirmationCreationReleveDto)
  }
  // Modifier une relève, sans toucher aux relèves cadran
  modifierReleve(releveModifie: modifierReleveDto) : Observable<ReleveDto>{
    return this.http.put<ReleveDto>(`${relevesServiceAddress}/modifierReleve`,releveModifie)
  }
  // Modifier une relève cadran
  modifierReleveCadran(releveCadranModifie: modifierReleveCadranDto) : Observable<ReleveCadranDto>{
    return this.http.put<ReleveCadranDto>(`${relevesCadransServiceAddress}/modifierReleveCadran`, releveCadranModifie)
  }
  // Supprimer une relève
  supprimerReleve(idReleve: number): Observable<boolean>{
    return this.http.delete<boolean>(`${relevesServiceAddress}/${idReleve}`)
  }
}
