
"use client"
import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { p2pTransfer } from "../app/lib/actions/p2ptTransfer";
import { Input } from "../@/components/ui/input";
import { Textarea } from "../@/components/ui/textarea";
import { Loader2 } from "lucide-react";
const PaymentTransferForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
//@ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await p2pTransfer(note, number, Number(amount)*100);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col border-t border-gray-200">
      <div className="flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8 pb-6 pt-5">
        <div className="flex w-full max-w-[280px] flex-col gap-2">
          <label className="text-14 font-medium text-gray-700">
            Transfer Note (Optional)
          </label>
          <p className="text-12 font-normal text-gray-600">
            Please provide any additional information or instructions related to the transfer
          </p>
        </div>
        <div className="flex w-full flex-col">
          <Textarea
            placeholder="Write a short note here"
            className="input-class"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 border-t border-gray-200 pb-5 pt-6">
        <h2 className="text-18 font-semibold text-gray-900">
          Bank account details
        </h2>
        <p className="text-16 font-normal text-gray-600">
          Enter the bank account details of the recipient
        </p>
      </div>

      <div className="flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8 py-5">
        <label className="text-14 w-full max-w-[280px] font-medium text-gray-700">
          Recipient's Phone Number
        </label>
        <div className="flex w-full flex-col">
          <Input
            placeholder="ex: 9876543210"
            className="input-class"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8 py-5">
        <label className="text-14 w-full max-w-[280px] font-medium text-gray-700">
          Amount
        </label>
        <div className="flex w-full flex-col">
          <Input
            placeholder="ex: 5"
            className="input-class"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" className="mt-5 flex w-full max-w-[850px] gap-3 bg-[#6a51a6] rounded-lg text-14 w-full text-white shadow-lg">
        {isLoading ? (
          <Loader2 className="w-6 h-6 text-black" />
        ) : (
          "Transfer Funds"
        )}
      </Button>
    </form>
  );
};

export default PaymentTransferForm;

