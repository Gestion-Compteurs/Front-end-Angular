import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {regieServiceAddress} from "../../environnement";
import {Observable} from "rxjs";
import {AdminInListAllAdminsDto, AgentInListAllAgentsDto} from "../../DTOs/RegieDto";

@Injectable({
  providedIn: 'root'
})
export class RegiesService {

  constructor(
    private http: HttpClient
  ) { }
  // Lister tous les agents de terrain de la régie
  listAllRegiesAgents(regieId: number):Observable<AgentInListAllAgentsDto[]>{
    return this.http.get<AgentInListAllAgentsDto[]>(`${regieServiceAddress}/ListAllAgents/${regieId}`)
  }
  // Lister tous les administrateurs de la régie
  listAllRegiesAdmins(regieId: number) : Observable<AdminInListAllAdminsDto[]>{
    return this.http.get<AdminInListAllAdminsDto[]>(`${regieServiceAddress}/ListAllAdministrateurs/${regieId}`)
  }
  // Débloquer le compte d'un administrateur
  unlockAdminAccount(regieId: number, adminId: number) : Observable<boolean>{
    return this.http.put<boolean>(`${regieServiceAddress}/unlockAdministrateur/${adminId}/${regieId}`,{})
  }
  // Bloquer le compte d'un administrateur
  lockAdminAccount(regieId: number, adminId: number) : Observable<boolean>{
    return this.http.put<boolean>(`${regieServiceAddress}/lockAdministrateur/${adminId}/${regieId}`,{})
  }
}
