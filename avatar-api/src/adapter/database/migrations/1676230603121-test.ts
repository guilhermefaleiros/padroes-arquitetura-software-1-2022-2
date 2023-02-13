import { MigrationInterface, QueryRunner } from "typeorm";

export class test1676230603121 implements MigrationInterface {
    name = 'test1676230603121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avatar" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "height" numeric NOT NULL, "weight" numeric NOT NULL, "fat_percentage" numeric NOT NULL, CONSTRAINT "PK_50e36da9d45349941038eaf149d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "avatar"`);
    }

}
