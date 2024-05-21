import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {batimentsServiceAddress} from "../../environnement";
import {Observable} from "rxjs";
import {AjoutBatimentDto, BatimentAListerDto, BatimentDto} from "../../DTOs/BatimentDto";
import {AjoutBatimentComponent} from "../../batiments/ajout-batiment/ajout-batiment.component";

@Injectable({
  providedIn: 'root'
})
export class BatimentsService {

  constructor(
    // Injection de HttpClient
    private http:HttpClient
  ) { }
  // En-tête
  headers!: HttpHeaders
  // Lister tous les bâtiments
  listerBatiments(): Observable<BatimentAListerDto[]>{
    return this.http.get<BatimentAListerDto[]>(`${batimentsServiceAddress}`);
  }
  // Retrouver bâtiment et instances compteurs
  retrouverBatimentsEtInstancesCompteurs(batimentId:number): Observable<BatimentDto>{
    return this.http.get<BatimentDto>(`${batimentsServiceAddress}/retrouverInstancesCompteur/${batimentId}`)
  }
  // Ajouter un bâtiment
  ajouterBatiment(batiment: AjoutBatimentDto) : Observable<BatimentDto> {
    return this.http.post<BatimentDto>(`${batimentsServiceAddress}`, batiment)
  }
  // Modifier un bâtiment
  updateBatiment(
    batimentId: number,
    batimentModifie: AjoutBatimentDto): Observable<BatimentDto>{
    return this.http.put<BatimentDto>(`${batimentsServiceAddress}/modifierDetails/${batimentId}`,batimentModifie);
  }
  // Supprimer un bâtiment
  deleteBatiment(batimentId: number) : Observable<boolean>{
    return this.http.delete<boolean>(`${batimentsServiceAddress}/${batimentId}`);
  }
}
