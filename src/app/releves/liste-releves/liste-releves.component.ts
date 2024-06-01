
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {ajouterReleveDto, ReleveDto} from "../../DTOs/ReleveDto";
import {DatePipe, NgForOf} from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {FormatterDatePipe} from "../../pipes/formatter-date.pipe";
import {RelevesService} from "../../services/releves/releves.service";
import {InstancesCompteursService} from "../../services/instances-compteurs/instances-compteurs.service";
import {InstanceCompteurDto} from "../../DTOs/InstanceCompteurDto";
import {json} from "node:stream/consumers";

@Component({
  selector: 'app-liste-releves',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    SidenavComponent,
    RouterLink,
    NgForOf,
    FormatterDatePipe
  ],
  templateUrl: './liste-releves.component.html',
  styleUrl: './liste-releves.component.css'
})
export class ListeRelevesComponent {
  // L'identifiant de l'instance du compteur
  instanceCompteurId! : number
  // L'instance compteur active
  instanceCompteur!: InstanceCompteurDto
  constructor(
    private route:ActivatedRoute,
    private _relevesService: RelevesService,
    private _instancesCompteursService: InstancesCompteursService
  ) {
    // L'identifiant de l'instance compteur
    this.instanceCompteurId = this.route.snapshot.params['idInstanceCompteur']
    console.log("L'identifiant de l'instance compteur à modifier " + this.instanceCompteurId)
    this.retrouverInstanceCompteur(this.instanceCompteurId)
  }
  retrouverInstanceCompteur(instanceCompteurId: number) {
    this._instancesCompteursService.retrouverInstanceCompteurEtSesReleves(instanceCompteurId).subscribe({
      next : value => {
        this.instanceCompteur = value
        console.log(`Instance compteur active ${this.instanceCompteur}`)
      },
      error: err => {
        console.log(`Erreur lors de la recherche de l'instance compteur ${err}`)
      }
    })
  }
  // Supprimer une relève
  deleteReleve(releveId: number) {
    this._relevesService.supprimerReleve(releveId).subscribe({
      next : value => {
        console.log(`Relève supprimée ${value}`)
        this.retrouverInstanceCompteur(this.instanceCompteurId)
      },
      error: err => {
        console.log(`Erreur lors de la suppression de la relève : ${err}`)
      }
    })
  }
}
