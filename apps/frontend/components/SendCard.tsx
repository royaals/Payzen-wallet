"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2ptTransfer";

export function SendCard() {
    const [note, setNote] = useState("");
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div>
        <Center>
            <Card title="Send">
                <div className="min-w-72 ">
                <TextInput placeholder={"Note"} label="Note" onChange={(value) => {
                        setNote(value)
                    }} />
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async() => {
                            await p2pTransfer(note,number, Number(amount)*100)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}