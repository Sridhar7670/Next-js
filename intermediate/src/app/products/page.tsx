import Link from "next/link";

export default function ProductsPage(){
    return <>
        <h1>GEARTURED PRODUCTS</h1>
        <Link href="/products/1">PRODUCT 1</Link>
        <Link href="/products/2">PRODUCT 2</Link>
        <Link href="/products/3">PRODUCT 3</Link>
    </>
}