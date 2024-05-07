
import { RouterLink } from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import { RegisterReleveDto } from "../../DTOs/ReleveDto";
import { NgForOf } from "@angular/common";
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
  ngOnInit() {

  }
  releves:RegisterReleveDto[] = [
    {
      releveId: 1,
      compteurId: 2,
      batimentId: 15,
      agentId: 42,
      dateReleve: new Date(),
      releveCadrans: []
    }
  ]
  deleteReleve(releveId: number) {}
}
