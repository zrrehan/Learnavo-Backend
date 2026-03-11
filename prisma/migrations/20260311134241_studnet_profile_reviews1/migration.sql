/*
  Warnings:

  - You are about to drop the column `studentProfileId` on the `Review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_studentProfileId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "studentProfileId",
ADD COLUMN     "studentUserId" TEXT;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_studentUserId_fkey" FOREIGN KEY ("studentUserId") REFERENCES "StudentProfile"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
