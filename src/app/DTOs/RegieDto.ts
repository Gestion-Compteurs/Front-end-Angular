interface RegieAuthenticationRequestDto {
  email: string,
  password: string,
  regieId: number
}

interface RegieDto {
  regieId: number,
  emailRegie: string,
  passwordRegie: string,
  nomRegion: string,
  administrateurs: any[],
  operateurs: any[]
}

interface RegieAuthenticationResponseDto {
  regie: RegieDto,
  accessToken: string
}

interface AdminInListAllAdminsDto {
  adminId: number;
  regieId: number;
  nom: string;
  prenom: string;
  compteActif: boolean | null;
  password: string;
  dateDeNaissance: Date | string;
  id: string;
  userName: string;
  normalizedUserName: string | null;
  email: string;
  normalizedEmail: string | null;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string | null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}

interface AgentInListAllAgentsDto {
  operateurId: number;
  dateEmbauche: Date | string;
  regieId: number;
  civilite: string;
  releves: any[];
  cin: string;
  nom: string;
  prenom: string;
  dateDeNaissance: Date | string;
}

export {
  RegieAuthenticationRequestDto,
  RegieDto,
  RegieAuthenticationResponseDto,
  AdminInListAllAdminsDto,
  AgentInListAllAgentsDto
}
