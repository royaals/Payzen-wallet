-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Wallet Topup';

-- AlterTable
ALTER TABLE "p2pTransfer" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Transfer';
