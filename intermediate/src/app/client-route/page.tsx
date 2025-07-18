// "use client"

// import ServeroutePage from "../utils/server-utis"

// export default function clientRoutePage(){
//     const result = ServeroutePage();
//     return <h1>i am client route {result}</h1>
// }
"use client"
import { useTheme } from '../components/theme-provider';
import { clientSideFunction } from '../utils/client-utils';

// import React from 'react';
// import Slider from 'react-slick';
// import "@/app/globals.css"

// export default function ImageSlider() {
//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="http://pisum.photos/400/200" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

export default function ImageSlider() {
 const theme=useTheme();
//  const result = clientSideFunction();
  return (
    <>
    <h1 style={{color:theme.colors.primary}}>Client route page</h1>
    {/* <p>{result}</p> */}
  </>);
}