import prisma from "@repo/db/client";


import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import RecentTransactions from "../../../components/RecentTransaction";






async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        id: t.id,

        time: t.startTime,
        amount: t.amount,
        status: t.status,
      
        description: t.description,
        type: t.type,
        category: t.category
    }))
}


export default async function() {

    const transactions1 = await getOnRampTransactions();
    

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transactions
        </div>
       
        
        
    <div>

    <RecentTransactions transactions={transactions1} />
    </div>

    </div>
}