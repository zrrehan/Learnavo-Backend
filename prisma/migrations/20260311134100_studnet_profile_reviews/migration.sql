/*
  Warnings:

  - You are about to drop the column `studentId` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "studentId",
ADD COLUMN     "studentProfileId" TEXT;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_studentProfileId_fkey" FOREIGN KEY ("studentProfileId") REFERENCES "StudentProfile"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
