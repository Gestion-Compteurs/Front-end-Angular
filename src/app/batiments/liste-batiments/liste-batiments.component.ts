import { Component } from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {BatimentAListerDto, BatimentDto} from "../../DTOs/BatimentDto";
import {RouterLink} from "@angular/router";
import {InstanceCadranDto} from "../../DTOs/InstanceCadranDto";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-liste-batiments',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './liste-batiments.component.html',
  styleUrl: './liste-batiments.component.css'
})
export class ListeBatimentsComponent {
  constructor(private datePipe:DatePipe) {
  }
  // L'identifiant du bâtiment actif
  idBatimentActif! : number
  // Le bâtiment actif
  batimentActif! : BatimentDto
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
  // Les bâtiments avec des détails à afficher
  batimentsDetailles: BatimentDto[] = [
    {
      batimentId : 1,
      adresse: "35, Hay El Kassimiah, Artisanal, Beni Mellal",
      instanceCompteur : [
        {
          instanceCompteurId : 1,
          batimentId : 1,
          compteurId: 1,
          dateInstallation : new Date(),
          cadrans : [
            {
              instanceCadranId : 1,
              cadranId: 2,
              indexRoues: 1234
            },
            {
              instanceCadranId : 2,
              cadranId: 3,
              indexRoues: 1034
            },
          ]
        },
        {
          instanceCompteurId : 1,
          batimentId : 1,
          compteurId: 1,
          dateInstallation : new Date(),
          cadrans : [
            {
              instanceCadranId : 1,
              cadranId: 2,
              indexRoues: 1234
            },
            {
              instanceCadranId : 2,
              cadranId: 3,
              indexRoues: 1034
            },
          ]
        }
      ]
    },
    {
      batimentId : 2,
      adresse: "29, Bloc E, Riad esSalam, Mohammedia",
      instanceCompteur : [
        {
          instanceCompteurId : 1,
          batimentId : 1,
          compteurId: 1,
          dateInstallation : new Date(),
          cadrans : [
            {
              instanceCadranId : 1,
              cadranId: 2,
              indexRoues: 1234
            },
            {
              instanceCadranId : 2,
              cadranId: 3,
              indexRoues: 1034
            },
          ]
        },
      ]
    }
  ]
  // Activer un bâtiment pour voir ces détails
  voirDetailsBatiment(batimentId: number) {
    // Le mettre au bâtiment actif
    this.idBatimentActif = batimentId
    // Chercher les détails depuis la base de données et remplir
    // Pour l'instant on fait une fonction rapide pour les données en dur
    for(let batiment of this.batimentsDetailles){
      if(batiment.batimentId==batimentId){
        this.batimentActif = batiment
      }
    }
  }
  // Connaître le bâtiment actif
  batimentEstActif(batimentId : number) : boolean {
    return batimentId == this.idBatimentActif
  }

  updateAdresseBatiment(batimentId: number) {

  }

  // Formattage de date
  formatterDate(date:Date) : any {
    // Format AAAA-MM-JJ
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
