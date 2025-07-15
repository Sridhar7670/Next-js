// all about headers and cookies in next js

import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    // return new Response(" here is requested profile data from get server ")
    // const requestHeaders= new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));
    // return new Response("PROILE API DATA")
    
    const headerList=await headers();
    console.log(headerList.get("Authorization"));

    const CoookiesStore=await cookies();
    CoookiesStore.set("cookie-1","Vaue-1")
    console.log(CoookiesStore.get("cookie-1"))

    const key=request.cookies.get("key");
    console.log(key)

    return new Response("<h1>Profile API data</h1> ",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"key=12345"
        }
    })

}