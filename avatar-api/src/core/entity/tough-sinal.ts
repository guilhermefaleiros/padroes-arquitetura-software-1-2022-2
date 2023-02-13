import { Avatar } from './avatar'

export class ToughSinal {
  heart_rate: number
  respiratory_frequency: number
  blood_pressure: string
  temperature: number

  constructor(heart_rate: number, respiratory_frequency: number, blood_pressure: string, temperature: number) {
    this.heart_rate = heart_rate
    this.respiratory_frequency = respiratory_frequency
    this.blood_pressure = blood_pressure
    this.temperature = temperature
  }
}
