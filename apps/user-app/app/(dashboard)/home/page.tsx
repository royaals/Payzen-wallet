import HeaderBox from "../../../components/HeaderBox"
import prisma from "@repo/db/client";


import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
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


export default async function() {
    const balance = await getBalance();
  return (
    <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          /></header>
           <TotalBalanceBox amount={balance.amount} locked={balance.locked} />
  </div>
  )
}

