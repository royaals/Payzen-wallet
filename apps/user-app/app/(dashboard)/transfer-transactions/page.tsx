import prisma from "@repo/db/client";


import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import RecentTransactions from "../../../components/RecentTransaction";



async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        id: t.id,
        time: t.timestamp,
        amount: t.amount,
        description: t.description,
        status: t.status,
        type: t.type,
        category: t.category
    }))
}



export default async function() {

    const transactions2 = await getP2PTransactions();
    

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transactions
        </div>
       
        
        
    <div>

    <RecentTransactions transactions={transactions2} />
    </div>

    </div>
}