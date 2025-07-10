import Link from "next/link";
import logo from "./the-shack.webp"
export default function Home(){
    return (
        <div>
            <h1>Hi this is self learnt.</h1>
            <div>i am going to learn most of my time </div>
            <p>okay click here to navigate to some other pages....</p>
            <img src="./file.svg" alt="hi" width="20px"/>
            <Link href={"/products"}>Products</Link>
            <br/>
            <Link href={"/register"}>Register</Link>
            <br/>
            <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
            <br/>
            <Link href={"/articles/breaking-news-123?lang=fr"}>Read in Fresch</Link>
            <img src={logo.src} alt="hi" width="20px"/>
        </div>
    )
}