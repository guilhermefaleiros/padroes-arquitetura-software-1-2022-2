import { Avatar } from '@core/entity/avatar'

export interface AvatarRepository {
  findById(id: number): Promise<Avatar>
}
