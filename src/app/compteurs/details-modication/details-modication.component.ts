import { Component, OnInit } from '@angular/core';
import { CompteurDto } from '../../DTOs/CompteurDto';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";

@Component({
  selector: 'app-details-modication',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    CustomNavbarComponent
  ],
  templateUrl: './details-modication.component.html',
  styleUrl: './details-modication.component.css'
})
export class DetailsModicationComponent implements OnInit{
  // L'identifiant du compteur concerné
  compteurId! : number
  constructor(
    private route: ActivatedRoute
  ) {
    // Retrouver l'identifiant depuis la route
    this.compteurId = this.route.snapshot.params['compteurId']
  }
  ngOnInit(): void {


  }
  // le compteur à modifier
  compteur$ :CompteurDto = {
    compteurId: 0,
    marque: "",
    type: "",
    capacite: 0,
    nombreCadran: 0,
  }
  updateCompteur(): void{
    // Fonction pour modifier un compteur
  }
}
