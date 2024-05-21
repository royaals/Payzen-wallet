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





async function getP2PTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    //@ts-ignore
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
    const balance = await getBalance();
    const transactions2 = await getP2PTransactions();
    

    return <div className="w-screen">
      <div className="m-5">
       <TotalBalanceBox amount={balance.amount} locked={balance.locked} />
       </div>

        
    <div className="m-5">

    <RecentTransactions transactions={transactions2} />
    </div>

    </div>
}