import { Avatar, Gender } from '@core/entity/avatar'
import { AvatarRepository } from '@core/port/avatar-repository'
import AppDataSource from '@adapter/database/pg-data-source'
import { AvatarEntity } from '@adapter/database/entity/avatar'
import { Repository } from 'typeorm'

export class PostgresAvatarRepository implements AvatarRepository {
  private repository: Repository<AvatarEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(AvatarEntity)
  }

  async findById(id: number): Promise<Avatar> {
    const response = await this.repository.findOne({
      where: {
        id,
      },
    })
    const { name, age, gender, height, weight, fat_percentage, avatar_url } = response

    return new Avatar(id, name, age, Gender[gender], height, weight, fat_percentage, avatar_url)
  }
}
