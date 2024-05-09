import {InstanceCompteurDto} from "./InstanceCompteurDto";

interface BatimentAListerDto {
  batimentId : number,
  adresse : string,
  nombre_etages:number|null,
  type_batiment:string,
}
interface BatimentDto {
  batimentId : number,
  adresse : string,
  nombre_etages:number|null,
  type_batiment:string,
  instanceCompteur : InstanceCompteurDto[]
}

export {
  BatimentAListerDto,
  BatimentDto
}
