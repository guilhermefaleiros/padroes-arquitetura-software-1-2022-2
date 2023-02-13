import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedUsers1676329906136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO avatar (name, age, gender, height, weight, fat_percentage, avatar_url)
        VALUES ('John Doe', 32, 'Male', 1.80, 75, 20.5, 'https://models.readyplayer.me/63e95e5e6971624ce6b49624.glb')`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM avatar"`)
  }
}
