/*
  Warnings:

  - You are about to drop the `Element` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Element" DROP CONSTRAINT "Element_projectId_fkey";

-- DropTable
DROP TABLE "Element";
