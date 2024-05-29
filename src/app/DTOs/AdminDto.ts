interface AdminRegistrationRequestDto {
  nom: string,
  prenom: string,
  regieId: number,
  dateDeNaissance: string | Date,
  email: string,
  password: string,
  confirmPassword: string
}

interface AdminAuthenticationRequestDto {
  email: string,
  password: string,
  regieId: number
}

interface AdminInAuthenticationResponseDto {
  adminId: number;
  regieId: number;
  nom: string;
  prenom: string;
  compteActif: boolean;
  password: string;
  dateDeNaissance: string | Date;
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

interface AdminAuthenticationResponseDto {
  administrator: AdminInAuthenticationResponseDto,
  accessToken : string,
}

export {
  AdminRegistrationRequestDto,
  AdminAuthenticationRequestDto,
  AdminAuthenticationResponseDto
}
