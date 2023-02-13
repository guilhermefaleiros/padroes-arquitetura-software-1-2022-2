import { Avatar, Gender } from '@core/entity/avatar'
import { AvatarRepository } from '@core/port/avatar-repository'

export class MemoryAvatarRepository implements AvatarRepository {
  private avatars: Avatar[] = []

  constructor() {
    this.avatars.push(new Avatar(1, 'Lucas Henrique Souza', 22, Gender.MALE, 1.75, 70, 15, 'any'))
  }

  async findById(id: number): Promise<Avatar> {
    return Promise.resolve(this.avatars.find((avatar) => avatar.id == id))
  }
}
