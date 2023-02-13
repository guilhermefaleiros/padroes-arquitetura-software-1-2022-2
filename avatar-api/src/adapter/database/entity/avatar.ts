import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('avatar')
export class AvatarEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  name: string

  @Column('int')
  age: number

  @Column()
  gender: string

  @Column('decimal')
  height: number

  @Column('decimal')
  weight: number

  @Column('decimal')
  fat_percentage: number

  @Column()
  avatar_url: string
}
