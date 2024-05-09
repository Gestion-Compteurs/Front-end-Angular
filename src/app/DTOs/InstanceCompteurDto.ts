import {ReleveCadranDto} from "./ReleveCadranDto";

interface InstanceCompteurDto {
  instanceCompteurId : number,
  batimentId : number,
  compteurId: number,
  dateInstallation : Date,
  cadrans : ReleveCadranDto[]
}

export {
  InstanceCompteurDto
}
