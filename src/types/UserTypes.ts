export interface User {
  contactId: number
  name: string
  surnames: string
  birthDate: string
  gender: 'MALE' | 'FEMALE'
  photo: string | null
  phone: string
  profesion: string
  email: string
}

export interface UsersResponse {
  users: User[]
}
