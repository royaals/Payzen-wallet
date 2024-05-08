-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'credit';

-- AlterTable
ALTER TABLE "p2pTransfer" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'debit';
