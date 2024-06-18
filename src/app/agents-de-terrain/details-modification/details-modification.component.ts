import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ModifierAgentDeTerrainResponseDto, RegisterAgentDeTerrainRequestDto} from "../../DTOs/AgentDeTerrainDto";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { AgentsDeTerrainService } from '../../services/agents-de-terrain/agents-de-terrain.service';

@Component({
  selector: 'app-details-modification',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    CustomNavbarComponent
  ],
  templateUrl: './details-modification.component.html',
  styleUrl: './details-modification.component.css'
})
export class DetailsModificationComponent{
  // L'identifiant de l'agent concerné
  agentId! : number
  // L'agent à modifier
  agent$ :RegisterAgentDeTerrainRequestDto = {
    nom: "",
    prenom: "",
    cin: "",
    regieId : 0,
    dateDeNaissance: new Date(),
    civilite: "",
    dateEmbauche: new Date(),
    photo: "",
  }
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _service: AgentsDeTerrainService
  ) {
    // Retrouver l'identifiant depuis la route
    this.agentId = this.route.snapshot.params['agentId']
    this.retrouverAgentDeTerrain(this.agentId)
    // Retrouver l'agent en question
  }
  // Sa photo
  selectedFile: string | ArrayBuffer | null = null;
    // Retrouver le compteur que l'on veut consulter
    retrouverAgentDeTerrain(agentId: number){
      this.agent$.photo = this.selectedFile as string;
      this._service.rechercherAgentDeTerrain(agentId).subscribe({
        next: value=> {
          this.agent$ = value
          console.log(`Agent retrouvé depuis la base de données ${this.agent$}`)
        },
        error: err => {
          console.log(`Une erreur s'est produite durant la recherche de l'agent : ${err}`)
        }
      })
    }

  updateAgentDeTerrain(agentId:number){
    // Fonction pour modifier un agent de terrain
    let modificationAgentDeTerrainDto: ModifierAgentDeTerrainResponseDto = {
      nom: this.agent$.nom,
      prenom: this.agent$.prenom,
      cin: this.agent$.cin,
      regieId: this.agent$.regieId,
      dateDeNaissance:this.agent$.dateDeNaissance,
      civilite:this.agent$.civilite,
      dateEmbauche:this.agent$.dateEmbauche,
      photo:this.agent$.photo,
    }
    this._service.modifierAgentDeTerrain(modificationAgentDeTerrainDto,agentId).subscribe({
      next : value => {
        this._router.navigate(['/agents']).then(r=> {
          console.log(`Agent de terrain modifié : ${value}`)
        })
      },
      error: err => {
        console.log(`Une erreur s'est produite lors de la modification du agent de terrain ${err}`)
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
