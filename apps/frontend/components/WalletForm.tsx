"use client"
import { useState } from "react";
import { Button } from "../@/components/ui/button";


import { Select } from "@repo/ui/select";
import { Input } from "../@/components/ui/input";
import { Textarea } from "../@/components/ui/textarea";
import { createOnRampTransaction } from "../app/lib/actions/createOnrampTransaction";
import { Loader2 } from "lucide-react";
const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
   
}, {
    name: "Axis Bank",

},
{
    name: "SBI Bank",

},
{
    name: "ICICI Bank",

},
{
    name: "BOB Bank",

},
{
    name: "Canara Bank",

},
{
    name: "IDFC Bank",

}];

export const WalletForm = () => {
 
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [note, setNote] = useState("");
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
//@ts-ignore
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await createOnRampTransaction(provider, note,Number(amount));
            window.location.href = "";
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
                    Enter the bank account details
                </p>
            </div>

            <div className="py-4 text-left">
                Bank
            </div>
            <Select onSelect={(value) => {
                setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "");
            }} options={SUPPORTED_BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} />
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

      <Button type="submit" className="mt-5 flex w-full max-w-[850px] gap-3 bg-[#6a51a6] rounded-lg text-14  text-white shadow-lg">
        {isLoading ? (
          <Loader2 className="w-6 h-6 text-black" />
        ) : (
          "Add Money"
        )}
      </Button>
        </form>
    );
};

export default WalletForm;
