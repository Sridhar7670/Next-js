// export default async function Page() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()
//   return (
//     <>
//     <h1>hi </h1>
//     <ul>
//       {posts.map((post:any ) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//     </>
//   )


  
// }



//AFTER MANUAL DELAY 
"use client"

import React from "react"
import {Properties} from "csstype"


export default async function Page() {
  

  await new Promise(resolve => setTimeout(resolve, 2000))

  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  type Post={
  id:number|string,
  title:string
}
  return (
    <>
      <div style={containerStyle}>
        {posts.map((post: Post) => (
          <div key={post.id} style={cardStyle}>{post.title}</div>
        ))}
      </div>
    </>
  )

  
}


  const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '16px',
  padding: '20px',
};


//METHOD _1
// const cardStyle:Properties={
//   boxSizing: 'border-box',
//   padding: '16px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   backgroundColor: '#f9f9f9',
//   textAlign: 'center',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   minWidth: '250px', 
//   color:"black"

// }

//METHOD _2

const cardStyle={
  boxSizing: 'border-box',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(1, 1, 1, 0.1)',
  minWidth: '250px', 
  color:"black"

 } as React.CSSProperties



