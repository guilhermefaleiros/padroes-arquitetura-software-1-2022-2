export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class Avatar {
  id: number
  name: string
  age: number
  gender: Gender
  height: number
  weight: number
  fat_percentage: number
  avatar_url: string

  constructor(id: number, name: string, age: number, gender: Gender, height: number, weight: number, fat_percentage: number, avatar_url: string) {
    this.id = id
    this.name = name
    this.age = age
    this.gender = gender
    this.height = height
    this.weight = weight
    this.fat_percentage = fat_percentage
    this.avatar_url = avatar_url
  }
}
