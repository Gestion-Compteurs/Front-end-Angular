import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {BatimentAListerDto, BatimentDto} from "../../DTOs/BatimentDto";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { RouterLink } from '@angular/router';
import {FormatterDatePipe} from "../../pipes/formatter-date.pipe";
import {BatimentsService} from "../../services/batiments/batiments.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {BatimentsDto} from "../../DTOs/BatimentsDto";
@Component({
  selector: 'app-liste-batiments',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    FormatterDatePipe,
  ],
  templateUrl: './liste-batiments.component.html',
  styleUrl: './liste-batiments.component.css'
})
export class ListeBatimentsComponent {
  // L'identifiant du bâtiment actif
  idBatimentActif! : number
  // Le bâtiment actif
  batimentActif! : BatimentsDto
  constructor(
    private datePipe:DatePipe,
    private _service: BatimentsService
  ) {
    // Utilisation des services
    this.retrouverListeBatiments()
  }
  retrouverListeBatiments() {
    // Remplir la liste des bâtiments
    this._service.listerBatiments().subscribe({
      next : (result) => {
        this.batiments = result
      },
      error : error => {
        console.log(error)
      }
    })
  }
  // Les bâtiments à ajouter
  batiments!: BatimentAListerDto[]

  // Activer un bâtiment pour voir ces détails
  voirDetailsBatiment(batimentId: number) {
    // Chercher les détails depuis la base de données et remplir
    this._service.retrouverBatimentsEtInstancesCompteurs(batimentId).subscribe({
      next : value => {
        console.log(value)
        // Le mettre au bâtiment actif
        this.batimentActif = value
        this.idBatimentActif = batimentId
        console.log(this.batimentActif)
      },
      error: error => {
        console.log(error)
      }
    })
  }
  // Connaître le bâtiment actif
  batimentEstActif(batimentId : number) : boolean {
    return batimentId == this.idBatimentActif
  }

  updateBatiment(batimentId: number) {
    // C'est batimentActif qu'il faut envoyer dans le corps de la requête
    this._service.updateBatiment(batimentId, this.batimentActif).subscribe({
      next : value => {
        console.log(`Bâtiment ${batimentId} mis à jour avec succès !`)
        this.retrouverListeBatiments()
      },
      error : err => {
        console.log(`Erreur lors de la modification du bâtiment ${err}`)
      }
    })
  }

  // Supprimer un bâtiment
  deleteBatiment(batimentId:number){
    this._service.deleteBatiment(batimentId).subscribe({
      next: value => {
        console.log(`Bâtiment avec identifiant ${batimentId} supprimé avec succèes`)
        this.retrouverListeBatiments()
      },
      error: err => {
        console.log(`Erreur lors de la suppression du bâtiment ${err}`)
      }
    })
  }
}
