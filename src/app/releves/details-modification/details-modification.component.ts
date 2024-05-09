import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ReleveDto} from "../../DTOs/ReleveDto";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FormatterDatePipe} from "../../pipes/formatter-date.pipe";

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
export class DetailsModificationComponent implements OnInit{
  // L'identifiant de la relève à modifier
  releveId! : number
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private datePipe: DatePipe
  ) {
    // L'identifiant de l'instance compteur
    this.releveId = this.route.snapshot.params['releveId']
  }
  ngOnInit(): void {
    // Retrouver la relève
  }
  // La relève
  releve:ReleveDto = {
    releveId: 1,
    compteurId: 2,
    batimentId: 15,
    instanceCompteurId: 1,
    agentId: 42,
    dateReleve: new Date(),
    releveCadrans: [
      {
        cadranId : 1,
        instanceCadranId: 1,
        indexRoues: 1689
      },
      {
        cadranId : 2,
        instanceCadranId: 2,
        indexRoues: 189
      }
    ]
  }

  updateReleve() {

  }

  // Formattage de date
  formatterDate(date:Date) : any {
     // Format AAAA-MM-JJ
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  updateReleveCadran() {
    // Pas encore implémentée
    console.log("Relève cadran updated")
  }
}
