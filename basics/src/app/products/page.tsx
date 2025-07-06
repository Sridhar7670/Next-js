import Link from "next/link";

export default function Product(){
    const productId=6969
    return (
        <div>
            <h1>products details</h1>
        <ol>
            <li><Link href={"/products/1"}>prod 1</Link></li>
            <li><Link href={"/products/2"}>prod 2</Link></li>
            <li><Link href={"/products/3"} replace>prod 3</Link></li>
            <li><Link href={`/products/${productId}`}>prod {productId}</Link></li>
        </ol>
        </div>
    )
}