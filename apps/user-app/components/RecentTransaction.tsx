
import { Card } from "@repo/ui/card"

import  TransactionsTable  from "./TransactionTable"
const RecentTransactions = ({
    transactions,
   
}: {
    transactions: {
        id: number,
        time: Date,
        amount: number,
        description: string,
        status: string,
  
        type: string,
        category: string
    }[],
    
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
  
  return (
    <section className="flex w-full flex-col gap-6">
      <header className="flex items-center justify-between">
        
        <h2 className="text-20 md:text-24 font-semibold text-gray-900">Recent transactions</h2>
        
      </header>

     <TransactionsTable transactions={transactions} />
      </section>
  )
}

export default RecentTransactions