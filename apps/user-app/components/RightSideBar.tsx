'use client'
import React from 'react'
import { useSession } from "next-auth/react";

const RightSidebar = ()=> {
  const { data: session } = useSession();
  const user = session?.user;
  const displayName = user?.name ? ` ${user.name.charAt(0).toUpperCase()}${user.name.slice(1)}` : "Default";


  
  return (
    <aside className="no-scrollbar hidden flex-col border-l mt-10 border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important ml-auto shadow-2xl rounded-md">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-cover bg-no-repeat" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile">
            <span className="text-5xl font-bold text-[#9472e1]">{user?.name?.charAt(0).toUpperCase()}</span>
          </div>

          <div className="flex flex-col pt-24">
            <h1 className='text-24 font-semibold text-violet-500  '>
             {displayName}
            </h1>
          
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar
