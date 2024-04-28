import prisma from "@repo/db/client";

import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { P2pTransfer } from "../../../components/P2PTransactions";






async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        
    }))
}
export default async function() {

    const transactions1 = await getOnRampTransactions();
    const transactions2 = await getP2PTransactions();

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transactions
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 ">
        <div className="pt-4">
                    <OnRampTransactions transactions={transactions1} />
                </div>
            
            <div>
              <div className="mt-4">
            <P2pTransfer transactions={transactions2} />
            </div>
                
            </div>
        </div>
    </div>
}