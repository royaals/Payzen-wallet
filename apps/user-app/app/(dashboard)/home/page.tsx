import HeaderBox from "../../../components/HeaderBox"
import prisma from "@repo/db/client";


import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import TotalBalanceBox from "../../../components/TotalBalanceBox";
import RightSidebar from "../../../components/RightSideBar";



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
      <>
      <section className="no-scrollbar w-screen ">
      <div className="grid grid-cols-2" style={{ gridTemplateColumns: "80% 20%" }}>
              <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
                  <header className="flex flex-col justify-between gap-8">
                      <HeaderBox 
                          type="greeting"
                          title="Welcome"
                          user={'Guest'}
                          subtext="Access and manage your account and transactions efficiently."
                      />
                  </header>
                  <TotalBalanceBox amount={balance.amount} locked={balance.locked} />
              </div>
              <div className="w-full">
                  <RightSidebar/>
              </div>
         
          </div>

      </section>
         
      </>
  )
}


