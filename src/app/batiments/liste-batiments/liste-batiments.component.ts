import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {BatimentAListerDto, BatimentDto} from "../../DTOs/BatimentDto";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { RouterLink } from '@angular/router';
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
    FormsModule,
  ],
  templateUrl: './liste-batiments.component.html',
  styleUrl: './liste-batiments.component.css'
})
export class ListeBatimentsComponent implements OnInit {
  constructor(private datePipe:DatePipe) {
  }
  ngOnInit() {
    // Remplir la liste des compteurs

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
      nombre_etages: 2,
      type_batiment: "Immeuble",
    },
    {
      batimentId : 2,
      adresse: "29, Bloc E, Riad esSalam, Mohammedia",
      nombre_etages: 3,
      type_batiment: "Maison",
    }
  ]
  // Les bâtiments avec des détails à afficher
  batimentsDetailles: BatimentDto[] = [
    {
      batimentId : 1,
      adresse: "35, Hay El Kassimiah, Artisanal, Beni Mellal",
      nombre_etages: 2,
      type_batiment: "Immeuble",
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
      nombre_etages: 2,
      type_batiment: "Maison",
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

  // Supprimer un bâtiment
  deleteBatiment(batimentId:number){

  }
  
  voirDetailsReleve(instanceCompteurId:number){
    
  }

}
