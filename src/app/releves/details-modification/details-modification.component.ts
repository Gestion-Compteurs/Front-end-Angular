import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {RouterLink} from "@angular/router";
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
  // La relève
  releve:ReleveDto = {
    releveId: 1,
    compteurId: 2,
    batimentId: 15,
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
  constructor(private datePipe: DatePipe) {
  }
  ngOnInit(): void {
    // Retrouver la relève

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
