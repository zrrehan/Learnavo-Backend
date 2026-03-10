-- AlterTable
ALTER TABLE "TutorProfile" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'offline',
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "subjects" TEXT[] DEFAULT ARRAY[]::TEXT[];
