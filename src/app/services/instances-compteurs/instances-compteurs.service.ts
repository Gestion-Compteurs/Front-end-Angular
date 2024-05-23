import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InstanceCompteurDto} from "../../DTOs/InstanceCompteurDto";
import {instancesCompteursServiceAddress, relevesServiceAddress} from "../../environnement";
import transformJavaScript from "@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer-worker";

@Injectable({
  providedIn: 'root'
})
export class InstancesCompteursService {

  constructor(
    private http: HttpClient
  ) { }

  retrouverInstanceCompteurEtSesReleves(instanceCompteurId: number): Observable<InstanceCompteurDto>{
    return this.http.get<InstanceCompteurDto>(`${instancesCompteursServiceAddress}/listerReleves/${instanceCompteurId}`);
  }




}
