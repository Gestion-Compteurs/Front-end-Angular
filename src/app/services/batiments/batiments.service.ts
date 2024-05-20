import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {batimentsServiceAddress} from "../../environnement";
import {Observable} from "rxjs";
import {BatimentAListerDto} from "../../DTOs/BatimentDto";

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

  listerBatiments(): Observable<BatimentAListerDto[]>{
    return this.http.get<BatimentAListerDto[]>(`${batimentsServiceAddress}`);
  }
}
