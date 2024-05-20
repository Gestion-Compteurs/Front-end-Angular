import {InstanceCompteurDto} from "./InstanceCompteurDto";

interface BatimentAListerDto {
  batimentId : number,
  adresse : string,
  nombreEtages:number,
  typeBatiment:string,
}
interface BatimentDto {
  batimentId : number,
  adresse : string,
  nombreEtages:number,
  typeBatiment:string,
  instanceCompteur : InstanceCompteurDto[]
}

export {
  BatimentAListerDto,
  BatimentDto
}
