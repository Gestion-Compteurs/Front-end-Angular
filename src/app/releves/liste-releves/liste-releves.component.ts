
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import { RegisterReleveDto } from "../../DTOs/ReleveDto";
import {DatePipe, NgForOf} from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {FormatterDatePipe} from "../../pipes/formatter-date.pipe";

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
export class ListeRelevesComponent implements OnInit {
  // L'identifiant de l'instance du compteur
  instanceCompteurId! : number
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private datePipe: DatePipe
  ) {
    // L'identifiant de l'instance compteur
    this.instanceCompteurId = this.route.snapshot.params['idInstanceCompteur']
    console.log("L'identifiant de l'instance compteur à modifier " + this.instanceCompteurId)
  }
  ngOnInit() {
    // Retrouver la relève depuis l'API

  }
  releves:RegisterReleveDto[] = [
    {
      releveId: 1,
      instanceCompteurId: 1,
      agentId: 42,
      dateReleve: new Date(),
      releveCadrans: []
    }
  ]
  deleteReleve(releveId: number) {}
}
