import Link from "next/link";

export default function F1(){
    return (
        <>
        <h1>F1</h1>
        <div>
            <Link href={"f1/f2"}>F2</Link>
            <br/>
            <Link href={"/f3"}>F3</Link>
        </div>
        </>
    )
} 