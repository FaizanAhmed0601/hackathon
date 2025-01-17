/* eslint-disable @typescript-eslint/no-unused-vars */

import Benefit from "./Components/Benefits";
import Brand from "./Components/Brand";
import Ceramics from "./Components/Ceramics";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import Product from "./Components/Products";

import Touch from "./Components/Touch";





export default function home() {
  return (
   <>
   <Navbar/>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
   

   

   </>
  );
}