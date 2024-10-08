import {CadranDto} from "./CadranDto";

interface CompteurDto {
  compteurId: number,
  marque: string,
  modele: string,
  voltageMax: number,
  anneeCreation: number,
  nombreCadrans: number,
  typesCadrans: CadranDto[]
}

interface AjouterCompteurDto {
  marque: string,
  modele: string,
  anneeCreation: number,
  voltageMax: number,
  typesCadrans: CadranDto[]

}

interface ModifierCompteurDto {
  marque: string,
  modele: string,
  anneeCreation: number,
  voltageMax: number
}

export {
  CompteurDto,
  AjouterCompteurDto,
  ModifierCompteurDto
}
