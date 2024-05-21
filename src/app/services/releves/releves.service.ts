import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ajouterReleveDto, confirmerAjoutReleveDto, ReleveDto} from "../../DTOs/ReleveDto";
import {relevesServiceAddress} from "../../environnement";
import {ReleveCadranDto} from "../../DTOs/ReleveCadranDto";

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
  demanderCreationReleve(releveDto: ajouterReleveDto) : Observable<confirmerAjoutReleveDto>{
    return this.http.post<confirmerAjoutReleveDto>(`${relevesServiceAddress}/ajouterPourInstanceCompteur`,releveDto)
  }
  // Demander l'enregistrement de la relève
  demanderEnregistrementReleve(confirmationCreationReleveDto: confirmerAjoutReleveDto) : Observable<ReleveDto> {
    return this.http.post<ReleveDto>(`${relevesServiceAddress}/confirmerAjouterPourInstanceCompteur`,confirmationCreationReleveDto)
  }
  // Supprimer une relève


}
