"use server"
import { redirect } from "next/navigation";
export async function SignIn() {
    redirect('/api/auth/signin');
}