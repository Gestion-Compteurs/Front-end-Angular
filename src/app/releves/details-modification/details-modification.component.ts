import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {modifierReleveDto, ReleveDto} from "../../DTOs/ReleveDto";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FormatterDatePipe} from "../../pipes/formatter-date.pipe";
import {RelevesService} from "../../services/releves/releves.service";
import {modifierReleveCadranDto, ReleveCadranDto} from "../../DTOs/ReleveCadranDto";

@Component({
  selector: 'app-details-modification',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    RouterLink,
    FormsModule,
    NgIf,
    FormatterDatePipe,
    NgForOf
  ],
  templateUrl: './details-modification.component.html',
  styleUrl: './details-modification.component.css'
})
export class DetailsModificationComponent {
  // L'identifiant de la relève à modifier
  releveId! : number
  // La relève
  releve!:ReleveDto
  constructor(
    private route:ActivatedRoute,
    private datePipe: DatePipe,
    private _service: RelevesService
  ) {
    // L'identifiant de l'instance compteur
    this.releveId = this.route.snapshot.params['releveId']
    this.retrouverReleveEtSesRelevesCadrans(this.releveId)
    console.log("L'identifiant de la relève à modifier : " + this.releveId)
  }
  retrouverReleveEtSesRelevesCadrans(releveId: number){
    this._service.retrouverReleveEtSesRelevesCadrans(releveId).subscribe({
      next : value => {
        this.releve = value
        console.log(`La relève que l'on consulte actuellement est ${this.releve}`)
      },
      error : err => {
        console.log(`Une erreur s'est produite lors de la recherche de la relève sur la page des détails : ${err}`)
      }
    })
  }
  modifierReleve() {
    let releveModifiee: modifierReleveDto = {
      releveId : this.releve.releveId,
      instanceCompteurId : this.releve.instanceCompteurId,
      operateurId : this.releve.agentId,
      dateReleve : this.releve.dateReleve,
    }
    this._service.modifierReleve(releveModifiee).subscribe({
      next : value => {
        this.releve =value
        console.log(`Relève modifiée, la nouvelle valeur est ${this.releve}`)
        this.retrouverReleveEtSesRelevesCadrans(this.releveId)
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de la modification de la relève ${err}`)
      }
    })
  }
  modifierReleveCadran(releveCadranModifiee: ReleveCadranDto) {
    let releveCadranModifieeAEnvoyer: modifierReleveCadranDto = {
      releveCadranId: releveCadranModifiee.releveCadranId,
      indexRoues: releveCadranModifiee.indexRoues,
      prixWatt: releveCadranModifiee.prixWatt
    }
    this._service.modifierReleveCadran(releveCadranModifieeAEnvoyer).subscribe({
      next : value => {
        console.log(`Relève cadran modifiée, la nouvelle valeur est ${value}`)
        this.retrouverReleveEtSesRelevesCadrans(this.releveId)
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de la modification de la relève cadran ${err}`)
      }
    })
  }
}
