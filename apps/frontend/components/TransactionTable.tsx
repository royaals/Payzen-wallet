import {
    Table,
    TableBody,
   
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../@/components/ui/table"
  import { transactionCategoryStyles } from "../app/constants"
  import { cn, formatAmount } from "../app/lib/utils"
  interface CategoryBadgeProps {
    category: string;
  }
  const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    const {
      borderColor,
      backgroundColor,
      textColor,
      chipBackgroundColor,
     } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
     
    return (
      <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
        <div className={cn('size-2 rounded-full', backgroundColor)} />
        <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
      </div>
    )
  } 
  
  const TransactionsTable = ({
    transactions
}: {
    transactions: {
        id: number,
        time: Date,
        amount: number,
        description: string,
        status: string,
     
        type: string,
        category: string
    }[]
}) => {
    const sortedTransactions = [...transactions].sort((a:any, b:any) => b.time - a.time);
    return (
      <Table>
        <TableHeader className="bg-[#f9fafb]">
          <TableRow>
            <TableHead className="p-4">Transaction</TableHead>
          
            <TableHead className="p-4">Amount</TableHead>
            <TableHead className="p-4">Status</TableHead>
            <TableHead className="p-4">Date</TableHead>
           <TableHead className="p-4 max-md:hidden">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTransactions.map((t) => {
            const status = t.status
            const amount = formatAmount(t.amount/100)
            const isDebit = t.type === 'debit';
            const isCredit = t.type === 'credit';
  
            return (
              <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}>
                <TableCell className="max-w-[250px] pl-2 pr-10">
                  <div className="flex items-center gap-3">
                    <h1 className="text-14 truncate font-semibold text-[#344054]">
                      {t.description}
                    </h1>
                  </div>
                </TableCell>
              
                <TableCell className={`pl-2 pr-10 font-semibold  ${
                  isDebit || amount[0] === '-' ?
                    'text-[#f04438]'
                    : 'text-[#039855]'
                }`}>
                  {isDebit ? `-${amount}` : isCredit ? amount : amount}
                </TableCell>
  
                <TableCell className="pl-2 pr-10">
                  <CategoryBadge category={status} /> 
                </TableCell>
  
                <TableCell className="min-w-32 pl-2 pr-10">
                {t.time.toDateString()}
                </TableCell>
               <TableCell className="pl-2 pr-10 max-md:hidden">
                 <CategoryBadge category={t.category} /> 
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
  
  export default TransactionsTable