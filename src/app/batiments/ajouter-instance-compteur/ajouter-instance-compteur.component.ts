import { Component } from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AjouterInstanceCompteurDto} from "../../DTOs/InstanceCompteurDto";
import {InstancesCompteursService} from "../../services/instances-compteurs/instances-compteurs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AjouterCompteurDto} from "../../DTOs/CompteurDto";

@Component({
  selector: 'app-ajouter-instance-compteur',
  standalone: true,
    imports: [
        CustomNavbarComponent,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './ajouter-instance-compteur.component.html',
  styleUrl: './ajouter-instance-compteur.component.css'
})
export class AjouterInstanceCompteurComponent {
  // L'identifiant du bâtiment concerné
  batimentId!: number
  // Dto d'ajout d'instance compteur
  ajouterInstanceCompteurDto$ : AjouterInstanceCompteurDto = {
    batimentId: 0,
    compteurId: 0,
    dateInstallation: new Date()
  }
  constructor(
    private _service: InstancesCompteursService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.ajouterInstanceCompteurDto$.batimentId = this._route.snapshot.params['batimentId']
  }

  // Ajouter une instance de compteur à un bâtiment
  ajouterInstanceABatiment(){
    this.ajouterInstanceCompteurDto$.dateInstallation = formatterDate
    this._service.ajouterInstanceCompteur(this.ajouterInstanceCompteurDto$).subscribe({
      next: value => {
        this._router.navigate(['/batiments'])
          .then(r => {
            console.log(`Nouvelle instance compteur ajoutée ${value}`)
          })
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de l'ajout de l'instance de compteur ${err}`)
      }
    })
  }
}
