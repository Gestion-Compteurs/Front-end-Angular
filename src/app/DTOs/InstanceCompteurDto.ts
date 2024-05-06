import {InstanceCadranDto} from "./InstanceCadranDto";

interface InstanceCompteurDto {
  instanceCompteurId : number,
  batimentId : number,
  compteurId: number,
  dateInstallation : Date,
  cadrans : InstanceCadranDto[]
}

export {
  InstanceCompteurDto
}
