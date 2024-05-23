import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AjouterInstanceCompteurDto, InstanceCompteurDto} from "../../DTOs/InstanceCompteurDto";
import {instancesCompteursServiceAddress, relevesServiceAddress} from "../../environnement";
import transformJavaScript from "@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer-worker";
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
    return this.http.post<BatimentDto>(`${instancesCompteursServiceAddress}/ajouterInstanceCompteur`,ajouterInstanceCompteurDto)
  }
}
