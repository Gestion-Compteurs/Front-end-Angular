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
  instanceCompteursDtos : InstanceCompteurDto[]
}

interface AjoutBatimentDto {
  adresse: string,
  nombreEtages: number,
  typeBatiment: string,
}
export {
  BatimentAListerDto,
  BatimentDto,
  AjoutBatimentDto
}
