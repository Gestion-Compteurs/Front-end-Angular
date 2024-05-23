import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {modifierReleveDto, ReleveDto} from "../../DTOs/ReleveDto";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FormatterDatePipe} from "../../pipes/formatter-date.pipe";
import {RelevesService} from "../../services/releves/releves.service";

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
    console.log("L'identifiant de la relève à modifier : " + this.releveId)
  }
  retrouverReleveEtSesRelevesCadran(releveId: number){
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

      },
      error: err => {

      }
    })
  }
  // Formattage de date
  formatterDate(date:Date) : any {
     // Format AAAA-MM-JJ
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  modifierReleveCadran() {
    // Pas encore implémentée
    console.log("Relève cadran updated")
  }
}
