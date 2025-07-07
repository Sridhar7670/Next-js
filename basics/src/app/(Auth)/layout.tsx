"use client"

//all kind of imports andi 
import { ReactNode } from "react";
import "../global.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

//Active Links 


//meta data must not be used cause wesaid use client

const navlinks=[
  {name:"register",href:"/register"},
  {name:"login",href:"/login"},
  {name:"forgot password",href:"/forgotpassword"}
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname= usePathname();
  return (
   <div className="parent">
    <div className="sidebar">
      {navlinks.map((links,ind)=>{
        const isActive= pathname ===links.href || (pathname.startsWith(links.href)&& links.href !=="/")
        return(<Link href={links.href} key={ind}  className={isActive ? "active" : "inactive"}>{links.name}</Link>)
      })}
    </div>
     <div className="main">
      {children}
      <p>Some specialized layout has occurred</p>
      
    </div>
   </div>
  );
}
