import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InstanceCompteurDto} from "../../DTOs/InstanceCompteurDto";
import {instancesCompteursServiceAddress} from "../../environnement";

@Injectable({
  providedIn: 'root'
})
export class InstancesCompteursService {

  constructor(
    private http: HttpClient
  ) { }

  retrouverInstanceCompteurEtSesInstancesCadransEtReleves(instanceCompteurId: number): Observable<InstanceCompteurDto>{
    return this.http.get<InstanceCompteurDto>(`${instancesCompteursServiceAddress}/${instanceCompteurId}`);
  }

}
