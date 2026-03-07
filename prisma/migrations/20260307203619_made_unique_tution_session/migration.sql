/*
  Warnings:

  - A unique constraint covering the columns `[tutorId,time]` on the table `TuitionSession` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TuitionSession_tutorId_time_key" ON "TuitionSession"("tutorId", "time");
