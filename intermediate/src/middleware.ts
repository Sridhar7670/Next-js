import { NextRequest, NextResponse } from "next/server";

// export function middleware(request:NextRequest){
    // return NextResponse.redirect(new URL("/",request.url));

    // if(request.nextUrl.pathname==="/profiledata"){
    //     return NextResponse.redirect(new URL("/time",request.nextUrl))
    // }
// NextRequest.redirect - to completetly navigate to some other page 
    // if(request.nextUrl.pathname==="/profiledata"){
    //     return NextResponse.rewrite(new URL("/time",request.nextUrl))
    // }
// Nextresponse.rewrite  to keep url in browser and change the serving conetent 
// }

// export const config={
//     matcher:"/profile",
// };

export function middleware(request:NextRequest){
    const response = NextResponse.next();
    const themePreference=request.cookies.get("theme");
    if(!themePreference){
        response.cookies.set("theme","dragon");
    }

    response.headers.set("custom","thisHEADERIscustome")
    return response;
}
