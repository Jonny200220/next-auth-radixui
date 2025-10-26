-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'DESIGN', 'BRANDING', 'MARKETING', 'SISTEMAS', 'CLIENT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLIENT';

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");
