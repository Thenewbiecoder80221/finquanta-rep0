-- AlterTable
ALTER TABLE "TelemetryEvent" ADD COLUMN     "newBeneficiary" BOOLEAN,
ADD COLUMN     "transactionAmount" DOUBLE PRECISION,
ADD COLUMN     "transactionType" TEXT;
