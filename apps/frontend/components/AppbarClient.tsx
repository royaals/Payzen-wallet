"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";


export function AppbarClient() {
  const session = useSession();
 

  return (
   <div>
      <Appbar onSignin={signIn} onSignout={async () => {
       await signOut({ callbackUrl: `/payzen` })
        }} user={session.data?.user} />
   </div>
  );
}
