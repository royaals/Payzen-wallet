import prisma from "@repo/db/client";


import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import RecentTransactions from "../../../components/RecentTransaction";

import TotalBalanceBox from "../../../components/TotalBalanceBox";




async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}





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
    const balance = await getBalance();
    const transactions1 = await getOnRampTransactions();
    

    return <div className="w-screen">
       
       <div className="m-5">
       <TotalBalanceBox amount={balance.amount} locked={balance.locked} />
       </div>

        
    <div className="m-5">

    <RecentTransactions transactions={transactions1} />
    </div>

    </div>
}