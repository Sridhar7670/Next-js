"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router=useRouter()
    const handleClick =()=>{
        console.log("Placing Your Order");
        // router.push("/").  //to naviahte to certain path 
        // router.back() //to naviate to the previous page 
        //router.replace("/") //to replace the cuurent entry in history 
        //similar to replace in Link  
        //router.forward()  //to move forward in the history 
    }
    return ( 
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}