interface AdminRegistrationDto {
  Nom:string,
  Prenom:string,
  DateDeNaissance:Date,
  email: string,
  password:string,
  Confirmpassword:string,
}

interface AdminAuthenticationDto {
  email: string,
  password:string,
}

interface AdminAuthenticationResponseDto {
  tokenType: string,
  accessToken : string,
  expiresIn: number,
  refreshToken:string,
}

export {
  AdminRegistrationDto,
  AdminAuthenticationDto,
  AdminAuthenticationResponseDto
}
