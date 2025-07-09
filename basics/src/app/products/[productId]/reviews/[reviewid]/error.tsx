// "use client"
// import { useRouter } from "next/navigation";
// import { startTransition } from "react";

// export default function ErrorBoundary({error,reset}:{
//     error:Error,
//     reset:()=>void;
// }){
//     const router =useRouter();
//         const reload = () =>{
//             startTransition(()=>{
//                 router.refresh();
//                 reset();
//             });
//         };
//     return (
        
//     <>
//     <div>Error in reviewId</div>
//     <p>{error.message}</p>
//     <button onClick={reload}>Try again</button>
//     </>)
// }

'use client'; 

import React from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorWrapper({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: 20, background: '#fee', color: '#900' }}>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again </button>
    </div>
  );
}
