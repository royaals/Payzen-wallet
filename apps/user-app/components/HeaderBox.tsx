"use client"
import { useSession } from "next-auth/react";

interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user: string;
}

const HeaderBox = ({ type = "title", title, subtext, user: userName }: HeaderBoxProps) => {
  const { data: session } = useSession();
  const user = session?.user;
  const displayName = user?.name ? ` ${user.name.charAt(0).toUpperCase()}${user.name.slice(1)}` : userName;

  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
          <span className="text-[#6a51a6] ">
            {displayName}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox
