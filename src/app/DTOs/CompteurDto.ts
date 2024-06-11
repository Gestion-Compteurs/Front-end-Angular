import {CadranDto} from "./CadranDto";

interface CompteurDto {
  compteurId: number,
  marque: string,
  modele: string,
  voltageMax: number,
  anneeCreation: number,
  photo?: string,
  typesCadrans: CadranDto[]
}

interface AjouterCompteurDto {
  marque: string,
  modele: string,
  anneeCreation: number,
  voltageMax: number,
  photo?: string,
  typesCadrans: CadranDto[]

}

interface ModifierCompteurDto {
  marque: string,
  modele: string,
  anneeCreation: number,
  voltageMax: number,
  photo?: string,
}

export {
  CompteurDto,
  AjouterCompteurDto,
  ModifierCompteurDto
}
