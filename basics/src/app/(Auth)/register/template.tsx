"use client"

//all kind of imports andi 
import { ReactNode } from "react";
import "../../../app/global.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

//Active Links 


//meta data must not be used cause wesaid use client

const navlinks=[
  {name:"register",href:"/register"},
  {name:"login",href:"/login"},
  {name:"forgot password",href:"/forgotpassword"}
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [input,setInput]=useState("");
  const pathname= usePathname();
  return (
   <div className="parent">
    <div className="sidebar">
      <input value={input} onChange={(e=>setInput(e.target.value))}/>
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


// if we do a simple renaming this file from LayoutRouter.tsx to template.tsx every time,e some action happens then page re renders agaian and again 