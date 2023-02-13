import { AvatarEntity } from './entity/avatar'
import { DataSource } from 'typeorm'
import { test1676230603121 } from './migrations/1676230603121-test'
import { UpdateAvatarWithUrl1676237509374 } from './migrations/1676237509374-UpdateAvatarWithUrl'
import { SeedUsers1676329906136 } from './migrations/1676329906136-SeedUsers'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'avatar',
  synchronize: true,
  logging: true,
  entities: [AvatarEntity],
  subscribers: [],
  migrations: [test1676230603121, UpdateAvatarWithUrl1676237509374, SeedUsers1676329906136],
})

export default AppDataSource
