import {FormsModule} from '@angular/forms';
import {AjouterCompteurDto} from '../../DTOs/CompteurDto';
import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {CompteursService} from "../../services/compteurs/compteurs.service";
import {Router} from "@angular/router";
import {CadranDto} from "../../DTOs/CadranDto";

@Component({
  selector: 'app-ajout-compteurs$',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CustomNavbarComponent,
    NgForOf
  ],
  templateUrl: './ajout-compteurs.component.html',
  styleUrl: './ajout-compteurs.component.css'
})
export class AjoutCompteursComponent {
  compteur$ : AjouterCompteurDto = {
    marque: "nd",
    modele: "nd",
    anneeCreation: 0,
    voltageMax: 0,
    typesCadrans: []
  }
  // Le nombre de cadrans que possède le compteur
  nombreCadrans$!: number
  constructor(
    private _service: CompteursService,
    private _router: Router
  ) {
  }
  // Créer les modèles des cadrans à remplir
  creerTypesCadransARemplir(nombreAcreer: number){
    this.compteur$.typesCadrans = []
    for(let i: number = 0; i< nombreAcreer; i++){
      this.compteur$.typesCadrans[i] = {
        nombreRoues: 0,
        prixWatt: 0,
        heureActivation: "nd",
        heureArret: "nd",
        cadranModel: "nd"
      }
    }
    console.log(`Le compteur à renseigner : ${JSON.stringify(this.compteur$)}`)
  }

  ajouterCompteur(): void{
    for(let i: number = 0; i< this.compteur$.typesCadrans.length; i++){
      this.compteur$.typesCadrans[i].heureActivation = `${this.compteur$.typesCadrans[i].heureActivation}:00`
      this.compteur$.typesCadrans[i].heureArret = `${this.compteur$.typesCadrans[i].heureArret}:00`
    }
    this._service.ajouterCompteur(this.compteur$).subscribe({
      next: value => {
        this._router.navigate(['/compteurs'])
          .then(r=>{
            console.log(`Un nouveau compteur à été ajouté à la base de données ${JSON.stringify(value)}`)
          })
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de l'ajout du compteur : ${JSON.stringify(err)}`)
      }
    })
  }
}
