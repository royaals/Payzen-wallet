/*
  Warnings:

  - Made the column `note` on table `p2pTransfer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "p2pTransfer" ALTER COLUMN "note" SET NOT NULL;
