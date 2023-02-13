import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateAvatarWithUrl1676237509374 implements MigrationInterface {
  name = 'UpdateAvatarWithUrl1676237509374'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "avatar" ADD "avatar_url" character varying`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "avatar" DROP COLUMN "avatar_url"`)
  }
}
