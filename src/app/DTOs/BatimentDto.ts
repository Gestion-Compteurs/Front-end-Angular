import {InstanceCompteurDto} from "./InstanceCompteurDto";

interface BatimentAListerDto {
  batimentId : number,
  adresse : string,
}
interface BatimentDto {
  batimentId : number,
  adresse : string,
  instanceCompteur : InstanceCompteurDto[]
}

export {
  BatimentAListerDto,
  BatimentDto
}
