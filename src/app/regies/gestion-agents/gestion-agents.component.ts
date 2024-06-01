import { Component } from '@angular/core';
import {AgentInListAllAgentsDto} from "../../DTOs/RegieDto";
import {RegiesService} from "../../services/regies/regies.service";

@Component({
  selector: 'app-gestion-agents',
  standalone: true,
  imports: [],
  templateUrl: './gestion-agents.component.html',
  styleUrl: './gestion-agents.component.css'
})
export class GestionAgentsComponent {
  // Les agents de terrain à lister
  agentsList!: AgentInListAllAgentsDto[]
  // L'identifiant de la régie
  regieId : number = 0
  constructor(
    private _service: RegiesService
  ) {
    let regieIdStored : any = localStorage.getItem("regieId");
    this.regieId = parseInt(regieIdStored,10)
  }
  // Lister les agents de la régie
  listAllAgents(regieId: number){
    this._service.listAllRegiesAgents(regieId).subscribe({
      next: value => {
        this.agentsList = value
        console.log(`La liste des agents retrouvés`)
      },
      error : err => {
        console.log(`Une erreur s'est produite dans le listage des agents de la régie ${err}`)
      }
    })
  }

}
