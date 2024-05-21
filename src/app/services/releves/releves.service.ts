import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReleveDto} from "../../DTOs/ReleveDto";
import {relevesServiceAddress} from "../../environnement";

@Injectable({
  providedIn: 'root'
})
export class RelevesService {

  constructor(
    private http: HttpClient
  ) { }

  retrouverReleveEtSesInstancesCadrans(releveId: number):Observable<ReleveDto>{
    return this.http.get<ReleveDto>(`${relevesServiceAddress}/trouverReleve/${releveId}`)
  }

  // Supprimer une relève


}
