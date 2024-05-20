import {InstanceCompteurDto} from "./InstanceCompteurDto";

interface BatimentsDto {
  batimentId: number,
  adresse:string,
  nombreEtages:number,
  typeBatiment:string,
  instanceCompteursDtos: InstanceCompteurDto[]
}

export {
  BatimentsDto
}

