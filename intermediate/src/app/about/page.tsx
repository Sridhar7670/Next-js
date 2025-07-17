import { cookies } from "next/headers"

export default async function About(){
    const cookieStore= await cookies();
    const theme= cookieStore.get("theme");
    console.log(theme);
    console.log("About server component ")
    return <h2>i  about{new Date().toLocaleTimeString()}</h2>
}