import { Avatar } from '@core/entity/avatar'
import { AvatarRepository } from '@core/port/avatar-repository'

export class AvatarService {
  constructor(private readonly avatarRepository: AvatarRepository) {}

  async findById(id: number): Promise<Avatar> {
    return await this.avatarRepository.findById(id)
  }
}
