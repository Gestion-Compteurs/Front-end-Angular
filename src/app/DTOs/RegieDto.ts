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

export {
  RegieAuthenticationRequestDto,
  RegieDto,
  RegieAuthenticationResponseDto
}
