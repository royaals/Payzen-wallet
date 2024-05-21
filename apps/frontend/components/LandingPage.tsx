"use client"
import Link from "next/link"

import { SignIn } from "../app/lib/actions/Signin";
import Image from 'next/image'
export const LandingPage = () => {
  return (
    <div>
        <header className="bg-gray-900 text-white px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <BanknoteIcon className="h-6 w-6" />
          <span className="ml-2 font-medium">Payzen</span>
        </Link>
        <div className="flex justify-center items-center space-x-4">
         
          <div
            className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          
          >
              <button onClick={async() => {
                            await SignIn()
                        }}>Get Started</button> 
          
            
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Effortless Digital Payment
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Manage your finances on the go with our secure and user-friendly payment webapp.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <WalletIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">Wallet Transfers</h3>
                    <p className="text-gray-500 dark:text-gray-400">Move money between your accounts with a tap.</p>
                  </div>
                  <div className="space-y-2">
                    <WalletIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">P2P Transfers</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Easily send and receive money from your friends and family.
                    </p>
                  </div>
                  <div >
                    
                  </div>
                  <div >
                    
                  </div>
                  
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <PhoneIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">Auth Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Secure your account with phone-based authentication.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <BanknoteIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">Bank On/Off Ramp</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Easily transfer funds between your bank account and our platform.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <MoveIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">Phone Transfers</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Send money to friends and family using their phone number.
                    </p>
                  </div>
                 
                  <div className="space-y-2">
                    <ClockIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">Transaction Tracking</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Stay on top of your finances with detailed transaction history.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                alt="Mobile App"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/HeroImage.png"
                width="550"
              />
            </div>
          </div>
        </section>
      
      </main>
      <footer className="bg-gray-900 text-white px-4 md:px-6 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">© 2024 Payzen. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
//@ts-ignore
function BanknoteIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    )
  }
   
  
  //@ts-ignore
  
function ClockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  

  
  
  
  
    //@ts-ignore
  function MoveIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="5 9 2 12 5 15" />
        <polyline points="9 5 12 2 15 5" />
        <polyline points="15 19 12 22 9 19" />
        <polyline points="19 9 22 12 19 15" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    )
  }
    //@ts-ignore
  
  function PhoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  

  
    //@ts-ignore
  function WalletIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    )
  }
  
  