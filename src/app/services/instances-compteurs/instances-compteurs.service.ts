import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AjouterInstanceCompteurDto, InstanceCompteurDto} from "../../DTOs/InstanceCompteurDto";
import {batimentsServiceAddress, instancesCompteursServiceAddress, relevesServiceAddress} from "../../environnement";
import {BatimentDto} from "../../DTOs/BatimentDto";

@Injectable({
  providedIn: 'root'
})
export class InstancesCompteursService {
  constructor(
    private http: HttpClient
  ) { }
  // Retrouver une instance compteur et ses relèves
  retrouverInstanceCompteurEtSesReleves(instanceCompteurId: number): Observable<InstanceCompteurDto>{
    return this.http.get<InstanceCompteurDto>(`${instancesCompteursServiceAddress}/listerReleves/${instanceCompteurId}`);
  }
  // Ajouter une instance compteur à un bâtiment
  ajouterInstanceCompteur(ajouterInstanceCompteurDto: AjouterInstanceCompteurDto): Observable<BatimentDto>{
    return this.http.post<BatimentDto>(`${batimentsServiceAddress}/ajouterInstanceCompteur`,ajouterInstanceCompteurDto)
  }
  // Désinstaller une instance compteur
  desinstallerInstance(instanceCompteurId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${instancesCompteursServiceAddress}/SupprimerInstanceCompteur/${instanceCompteurId}`)
  }
}
