import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RegisterReleveDto} from "../../DTOs/ReleveDto";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";


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
    private router:Router,
    private route:ActivatedRoute
  ) {
    // L'identifiant de l'instance compteur
    this.instanceCompteurId = this.route.snapshot.params['idInstanceCompteur']
    console.log("L'identifiant de l'instance compteur qui recevra une nouvelle relève est "+ this.instanceCompteurId)
  }
  // La rélève à enregistrer
  releve$ :RegisterReleveDto = {
    releveId: 0,
    compteurId: 0,
    batimentId: 0,
    instanceCompteurId: 1,
    agentId: 0,
    dateReleve: new Date(),
    releveCadrans: []
  }
  // photo de rélève
  selectedFile: string | ArrayBuffer | null = null;
  registerReleve(): void{
    // Fonction pour enregistrer une rélève
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

