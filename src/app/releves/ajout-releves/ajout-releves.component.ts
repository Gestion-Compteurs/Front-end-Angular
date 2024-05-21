import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ajouterReleveDto, confirmerAjoutReleveDto} from "../../DTOs/ReleveDto";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {RelevesService} from "../../services/releves/releves.service";


@Component({
  selector: 'app-ajout-releves',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgIf,
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RouterLink
  ],
  templateUrl: './ajout-releves.component.html',
  styleUrl: './ajout-releves.component.css'
})
export class AjoutRelevesComponent {
  // L'identifiant de l'instance du compteur
  instanceCompteurId! : number
  constructor(
    private _router:Router,
    private route:ActivatedRoute,
    private _service: RelevesService
  ) {
    // L'identifiant de l'instance compteur
    this.instanceCompteurId = this.route.snapshot.params['idInstanceCompteur']
    console.log("L'identifiant de l'instance compteur qui recevra une nouvelle relève est "+ this.instanceCompteurId)
  }
  // Les détails de la relève à enregistrer
  releve$! :ajouterReleveDto
  // La relève créée à renseigner
  releveARenseigner! : confirmerAjoutReleveDto
  // photo de rélève
  selectedFile: string | ArrayBuffer | null = null;
  // Demander la création de la relève
  registerReleve(): void{
    this._service.demanderCreationReleve(this.releve$).subscribe({
      next: value => {
        this.releveARenseigner = value
        console.log(`Nouvelle relève créée à renseigner : ${this.releveARenseigner}`)
      },
      error: err => {
        console.log(`Erreur dans la demande de création de la nouvelle relève : ${err}`)
      }
    })
  }

  // Demander l'enregistrement de la relève
  demanderEnregistrementReleve() {
    this._service.demanderEnregistrementReleve(this.releveARenseigner).subscribe({
      next: value => {
        this._router.navigate(['/instance-compteur', this.instanceCompteurId])
          .then(r => {
            console.log(`Nouvelle relève enregistrée : ${value}`)
          })
      },
      error: err => {
        console.log(`Erreur dans la confirmation de création de la nouvelle relève : ${err}`)
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

  updateReleveCadran() {

  }
}

