import Counter from "./counter";
//cannot export metadata from use client so create write meta data in page.tsx export complx fucntionality from other files 
export const  metadata={
    title:"counter",
    description:"basic counter"
}

export default function CounterPage(){
    return <Counter/>
}