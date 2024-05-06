import { formatAmount } from "../app/lib/utils";
import { AnimationCount } from "./AnimationCount";

const TotalBalanceBox = ({ amount, locked }: { amount: number; locked: number }) => {
   const total=(locked + amount) / 100;
  return (
    <section className="total-balance ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-14 font-medium text-gray-600">Total Current Balance</p>
          <div className="text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex-center gap-2">
            <AnimationCount total={total}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
