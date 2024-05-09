
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import { RegisterReleveDto } from "../../DTOs/ReleveDto";
import {DatePipe, NgForOf} from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-liste-releves',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    SidenavComponent,
    RouterLink,
    NgForOf
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
    this.instanceCompteurId = this.route.snapshot.params['instanceCompteurId']
  }
  ngOnInit() {

  }
  releves:RegisterReleveDto[] = [
    {
      releveId: 1,
      compteurId: 2,
      batimentId: 15,
      instanceCompteurId: 1,
      agentId: 42,
      dateReleve: new Date(),
      releveCadrans: []
    }
  ]
  deleteReleve(releveId: number) {}
}
