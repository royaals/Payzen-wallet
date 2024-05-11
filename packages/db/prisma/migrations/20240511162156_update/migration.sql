-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "note" TEXT DEFAULT 'Wallet Topup';

-- AlterTable
ALTER TABLE "p2pTransfer" ADD COLUMN     "note" TEXT DEFAULT 'Transfer';
