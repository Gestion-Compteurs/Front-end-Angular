interface RegisterAgentDeTerrainRequestDto {
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: string;
  civilite: string;
  dateEmbauche: string;
}

interface RegisterAgentDeTerrainResponseDto {
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: string;
  civilite: string;
  dateEmbauche: string;
}

export {
  RegisterAgentDeTerrainRequestDto,
  RegisterAgentDeTerrainResponseDto
}
