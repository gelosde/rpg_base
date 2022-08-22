import { MigrationInterface, QueryRunner } from "typeorm";
import { hashSync } from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();
export class createTable1651200511847 implements MigrationInterface {
  name = "createTable1651200511847";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "size" integer NOT NULL, "weight" integer NOT NULL, "max_weight" integer NOT NULL, CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "inventory_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL DEFAULT '0', "inventoryId" uuid NOT NULL, CONSTRAINT "REL_ce6b6a0a8ba96d183b0d210462" UNIQUE ("inventoryId"), CONSTRAINT "PK_94f5cbcb5f280f2f30bd4a9fd90" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL DEFAULT 'test', "quantity" integer NOT NULL DEFAULT '1', "type" character varying NOT NULL, "size" integer NOT NULL DEFAULT '1', "weight" integer NOT NULL DEFAULT '1', "damage" integer NOT NULL DEFAULT '0', "defense" integer NOT NULL DEFAULT '1', "durability" integer NOT NULL DEFAULT '1', "effect" character varying NOT NULL, "inventoryItemId" uuid, "monsterId" uuid, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "monsters" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "hp" integer NOT NULL, "mana" integer NOT NULL, "stamina" integer NOT NULL, "damage" integer NOT NULL, "xp_drop" integer NOT NULL DEFAULT '100', "nivel" integer NOT NULL DEFAULT '1', "quantity_drop" integer NOT NULL, CONSTRAINT "PK_54abad06b2131c35078519e9e19" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "skills" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "level_required" integer NOT NULL, "type" character varying NOT NULL, "damage" integer NOT NULL, "special_effect" character varying NOT NULL, "cost_skill" integer NOT NULL, "type_target" character varying NOT NULL, "cost_type" character varying NOT NULL, "element_target" character varying NOT NULL, "power_rank" integer NOT NULL, "class" uuid, "monsterId" uuid, CONSTRAINT "UQ_81f05095507fd84aa2769b4a522" UNIQUE ("name"), CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "status" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "strength" integer NOT NULL, "intelligency" integer NOT NULL, "hp" integer NOT NULL, "stamina" integer NOT NULL, "mana" integer NOT NULL, "speed" integer NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "classes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "statusId" uuid NOT NULL, CONSTRAINT "UQ_1f3940af28a76098f31004f03ca" UNIQUE ("name"), CONSTRAINT "REL_b563a5de2704ed687f6af90689" UNIQUE ("statusId"), CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "phone" character varying(11) NOT NULL, "username" character varying(30) NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "address" character varying NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "character" uuid, CONSTRAINT "REL_3316a23d939a6665ecc78357fc" UNIQUE ("character"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "characters" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(15) NOT NULL, "xp" integer NOT NULL, "xp_needed" integer NOT NULL, "level" integer NOT NULL DEFAULT '1', "inventory" uuid NOT NULL, "class" uuid NOT NULL, CONSTRAINT "UQ_86a2bcc85e3473ecf3693dfe5a1" UNIQUE ("name"), CONSTRAINT "REL_b2cd5a49ca47918c6cea3ca540" UNIQUE ("inventory"), CONSTRAINT "PK_9d731e05758f26b9315dac5e378" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "inventory_item" ADD CONSTRAINT "FK_ce6b6a0a8ba96d183b0d2104621" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "items" ADD CONSTRAINT "FK_ddebe75799257144ab9faea8085" FOREIGN KEY ("inventoryItemId") REFERENCES "inventory_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "items" ADD CONSTRAINT "FK_4ba54f5b1f7bed84a42c42d1b7c" FOREIGN KEY ("monsterId") REFERENCES "monsters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "skills" ADD CONSTRAINT "FK_d397dfc2d97eb78bb5bc562803d" FOREIGN KEY ("class") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "skills" ADD CONSTRAINT "FK_7e14993f95f09b4b076dcb909b5" FOREIGN KEY ("monsterId") REFERENCES "monsters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "classes" ADD CONSTRAINT "FK_b563a5de2704ed687f6af906892" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_3316a23d939a6665ecc78357fc5" FOREIGN KEY ("character") REFERENCES "characters"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "characters" ADD CONSTRAINT "FK_b2cd5a49ca47918c6cea3ca5403" FOREIGN KEY ("inventory") REFERENCES "inventory"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "characters" ADD CONSTRAINT "FK_4f5aae5b762077434eab13b4c10" FOREIGN KEY ("class") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `INSERT INTO "users" ("email", "phone", "username", "password", "age", "address", "isAdm") VALUES ('${
        process.env.ADM_EMAIL
      }','${process.env.ADM_PHONE}','${process.env.ADM_USERNAME}','${hashSync(
        process.env.ADM_PASSWORD,
        10
      )}','${process.env.ADM_AGE}','${process.env.ADM_ADDRESS}', true)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "characters" DROP CONSTRAINT "FK_4f5aae5b762077434eab13b4c10"`
    );
    await queryRunner.query(
      `ALTER TABLE "characters" DROP CONSTRAINT "FK_b2cd5a49ca47918c6cea3ca5403"`
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_3316a23d939a6665ecc78357fc5"`
    );
    await queryRunner.query(
      `ALTER TABLE "classes" DROP CONSTRAINT "FK_b563a5de2704ed687f6af906892"`
    );
    await queryRunner.query(
      `ALTER TABLE "skills" DROP CONSTRAINT "FK_7e14993f95f09b4b076dcb909b5"`
    );
    await queryRunner.query(
      `ALTER TABLE "skills" DROP CONSTRAINT "FK_d397dfc2d97eb78bb5bc562803d"`
    );
    await queryRunner.query(
      `ALTER TABLE "items" DROP CONSTRAINT "FK_4ba54f5b1f7bed84a42c42d1b7c"`
    );
    await queryRunner.query(
      `ALTER TABLE "items" DROP CONSTRAINT "FK_ddebe75799257144ab9faea8085"`
    );
    await queryRunner.query(
      `ALTER TABLE "inventory_item" DROP CONSTRAINT "FK_ce6b6a0a8ba96d183b0d2104621"`
    );
    await queryRunner.query(`DROP TABLE "characters"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "classes"`);
    await queryRunner.query(`DROP TABLE "status"`);
    await queryRunner.query(`DROP TABLE "skills"`);
    await queryRunner.query(`DROP TABLE "monsters"`);
    await queryRunner.query(`DROP TABLE "items"`);
    await queryRunner.query(`DROP TABLE "inventory_item"`);
    await queryRunner.query(`DROP TABLE "inventory"`);
  }
}
