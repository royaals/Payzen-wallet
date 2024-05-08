-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Topup';

-- AlterTable
ALTER TABLE "p2pTransfer" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Transfer';
