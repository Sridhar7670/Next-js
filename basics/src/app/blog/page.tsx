import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata={
    title:{
        absolute:"blog"
    }
}
export default function Blog(){
    return (
    <>
    <h2>blog</h2>
    <Link href={"/"}>Home</Link>
    <br></br>
    <Link href={"/login"}>Login</Link>
    </>)
}