interface Medias {
  name: string,
  url: string
}

export interface Me {
  avatar: string,
  firstName: string,
  lastName: string,
  description: string,
  socialMedia: Medias[]
}