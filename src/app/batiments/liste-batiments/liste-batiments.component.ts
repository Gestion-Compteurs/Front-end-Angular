import { Component } from '@angular/core';
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BatimentsDto } from '../../DTOs/BatimentsDto';
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
  ngOnInit() {
    // Remplir la liste des compteurs

  }

  // La liste des compteurs à afficher
  batiments: BatimentsDto[] = [
    {
      batimentId : 0,
      adresse: "rabat",
      nombre_etages:2,
      type_batiment:"immeuble",
    },

  ]
  deleteBatiment(batimentId:number){
    
  }

}
