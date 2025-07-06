"use client"

//all kind of imports andi 
import { ReactNode } from "react";
import "./styles.css"
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
        return(<Link href={links.href} key={ind} className={isActive ? `font-bold m-4` :`text-blue-500 mr-4`}>{links.name}</Link>)
      })}
    </div>
     <div className="flex gap-4 flex-col bg-blue-200 ">
      {children}
      <p>Some specialized layout has occurred</p>
      <p className="text-blue-500 bg-yellow-200 p-4">Text color test</p>
      
    </div>
   </div>
  );
}
