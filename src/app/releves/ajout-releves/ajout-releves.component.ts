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
  // Les détails de la relève à enregistrer
  releve$ :ajouterReleveDto = {
    instanceCompteurId : 0,
    operateurId: 0
  }
  // La relève créée à renseigner
  releveARenseigner! : confirmerAjoutReleveDto
  // Si l'utilisateur a déjà demandé la création ou non
  creationDemandee : boolean = false
  // photo de rélève
  selectedFile: string | ArrayBuffer | null = null;
  constructor(
    private _router:Router,
    private route:ActivatedRoute,
    private _service: RelevesService
  ) {
    // L'identifiant de l'instance compteur
    this.instanceCompteurId = this.route.snapshot.params['idInstanceCompteur']
    console.log("L'identifiant de l'instance compteur qui recevra une nouvelle relève est "+ this.instanceCompteurId)
    // Renseigner l'identifiant de l'instance compteur dans le corps de la requête
    this.releve$.instanceCompteurId = this.instanceCompteurId
    console.log(this.releve$)
    console.log(this.creationDemandee)
  }
  // Demander la création de la relève
  registerReleve(): void{
    console.log(this.releve$)
    this._service.demanderCreationReleve(this.releve$).subscribe({
      next: value => {
        this.releveARenseigner = value
        console.log(`Nouvelle relève créée à renseigner : ${this.releveARenseigner}`)
        this.creationDemandee =  true
        console.log(this.creationDemandee)
      },
      error: err => {
        console.log(`Erreur dans la demande de création de la nouvelle relève : ${err}`)
      }
    })
  }

  // Demander l'enregistrement de la relève
  demanderEnregistrementReleve() {
    console.log(this.creationDemandee)
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

