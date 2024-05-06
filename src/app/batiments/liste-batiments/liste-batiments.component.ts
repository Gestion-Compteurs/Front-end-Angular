import { Component } from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {NgForOf} from "@angular/common";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {BatimentAListerDto} from "../../DTOs/BatimentDto";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-liste-batiments',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RouterLink
  ],
  templateUrl: './liste-batiments.component.html',
  styleUrl: './liste-batiments.component.css'
})
export class ListeBatimentsComponent {
  // Les bâtiments à ajouter
  batiments: BatimentAListerDto[] = [
    {
      batimentId : 1,
      adresse: "35, Hay El Kassimiah, Artisanal, Beni Mellal",
    },
    {
      batimentId : 2,
      adresse: "29, Bloc E, Riad esSalam, Mohammedia",
    }
  ]
}
