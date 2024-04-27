interface AdminRegistrationDto {
  email: string,
  password:string,
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
