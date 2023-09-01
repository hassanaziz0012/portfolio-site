/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'Freelance';

-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "Element" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'HTML',
    "content" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Element_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Element" ADD CONSTRAINT "Element_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
