import { Component, OnInit } from '@angular/core';
import {CompteurDto, ModifierCompteurDto} from '../../DTOs/CompteurDto';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {CompteursService} from "../../services/compteurs/compteurs.service";

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
export class DetailsModicationComponent {
  // L'identifiant du compteur concerné
  compteurId! : number
  // Le compteur dont on va voir ses détails et qui sera modifié
  compteur$ :CompteurDto = {
    compteurId: 0,
    marque: "",
    modele: "",
    voltageMax: 0,
    anneeCreation: 0,
    typesCadrans: [],
  }
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _service: CompteursService
  ) {
    this.compteurId = this.route.snapshot.params['compteurId']
    this.retrouverCompteur(this.compteurId)
  }
  selectedFile: string | ArrayBuffer | null = null;
  // Retrouver le compteur que l'on veut consulter et/ou modifier
  retrouverCompteur(idCompteur: number){
    this._service.rechercherCompteur(idCompteur).subscribe({
      next: value=> {
        this.compteur$ = value
        console.log(`Compteur retrouvé depuis la base de données ${this.compteur$}`)
      },
      error: err => {
        console.log(`Une erreur s'est produite durant la recherche du compteur : ${err}`)
      }
    })
  }
  // Mettre à jour un compteur
  updateCompteur(compteurId:number){
    let modificationCompteurDto: ModifierCompteurDto = {
      marque: this.compteur$.marque,
      modele: this.compteur$.modele,
      anneeCreation: this.compteur$.anneeCreation,
      voltageMax: this.compteur$.voltageMax,
      photo:this.compteur$.photo,
    }
    this.compteur$.photo = this.selectedFile as string;
    this._service.modifierCompteur(compteurId,modificationCompteurDto).subscribe({
      next : value => {
        this._router.navigate(['/compteurs']).then(r=> {
          console.log(`Compteur modifié : ${value}`)
        })
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de la modification du compteur ${err}`)
      }
    })
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedFile = reader.result;
        console.log("Selected file "+ this.selectedFile)
      };
    }
  }
}
