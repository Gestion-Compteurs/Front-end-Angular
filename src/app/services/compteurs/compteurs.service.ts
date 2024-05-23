import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AjouterCompteurDto, CompteurDto, ModifierCompteurDto} from "../../DTOs/CompteurDto";
import {compteursServiceAddress} from "../../environnement";

@Injectable({
  providedIn: 'root'
})
export class CompteursService {
  constructor(
    private http: HttpClient
  ) { }
  // Lister les compteurs
  listerCompteurs(): Observable<CompteurDto[]>{
    return this.http.get<CompteurDto[]>(`${compteursServiceAddress}`)
  }
  // Ajouter un compteur
  ajouterCompteur(ajouterCompteurDto : AjouterCompteurDto) :Observable<CompteurDto>{
    return this.http.post<CompteurDto>(`${compteursServiceAddress}`,ajouterCompteurDto)
  }
  // Modifier un compteur
  modifierCompteur(
    idCompteur: number,
    modifierCompteurDto: ModifierCompteurDto
  ){
    return this.http.put<CompteurDto>(`${compteursServiceAddress}/${idCompteur}`,modifierCompteurDto)
  }
  // Rechercher un compteur
  rechercherCompteur(idCompteur: number): Observable<CompteurDto> {
    return this.http.get<CompteurDto>(`${compteursServiceAddress}/${idCompteur}`)
  }
  // Supprimer compteur
  supprimerCompteur(idCompteur: number): Observable<boolean>{
    return this.http.delete<boolean>(`${compteursServiceAddress}/${idCompteur}`)
  }
}
