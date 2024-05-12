"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";



import { Button } from "../@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form";
import { Input } from "../@/components/ui/input";
import { Textarea } from "../@/components/ui/textarea";
const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
const formSchema = z.object({
phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  name: z.string().min(4, "Transfer note is too short"),
  amount: z.string().min(2, "Amount is too short"),
 
});

const PaymentTransferForm = () => {
  const [note, setNote] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
       name: "",
        phone: "",
        amount: "",
      
      },
    });
  
    const submit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true);
      setNumber(data.phone);
      setAmount(data.amount);
      setNote(data.name);
    };
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}  className="flex flex-col">
         <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="border-t border-gray-200">
                <div className="flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8 pb-6 pt-5">
                  <div className="flex w-full max-w-[280px] flex-col gap-2">
                    <FormLabel className="text-14 font-medium text-gray-700">
                      Transfer Note (Optional)
                    </FormLabel>
                    <FormDescription className="text-12 font-normal text-gray-600">
                      Please provide any additional information or instructions
                      related to the transfer
                    </FormDescription>
                  </div>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Textarea
                        placeholder="Write a short note here"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />
  
          <div className="flex flex-col gap-1 border-t border-gray-200 pb-5 pt-6">
            <h2 className="text-18 font-semibold text-gray-900">
              Bank account details
            </h2>
            <p className="text-16 font-normal text-gray-600">
              Enter the bank account details of the recipient
            </p>
          </div>
  
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="border-t border-gray-200">
                <div className="flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8 py-5">
                  <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                    Recipient&apos;s Email Address
                  </FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="ex: johndoe@gmail.com"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />
  
         
  
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="border-y border-gray-200">
                <div className="flex w-full max-w-[850px] flex-col gap-3 md:flex-row lg:gap-8 py-5">
                  <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                    Amount
                  </FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="ex: 5.00"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />
  
          <div className="mt-5 flex w-full max-w-[850px] gap-3 border-gray-200 py-5">
            <Button type="submit" className="text-14 w-full bg-bank-gradient font-semibold text-white shadow-form !important">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
                </>
              ) : (
                "Transfer Funds"
              )}
            </Button>
          </div>
        </form>
      </Form>
    );
  };

 

export default PaymentTransferForm;