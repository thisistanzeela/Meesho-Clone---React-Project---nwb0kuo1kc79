import React, { useState } from 'react'
import Navbar from './Navbar'
import Navproduct from './NavProduct/Navproduct'
import Product from './product/Product'
import HeroBanner from './HeroPage/HeroBanner'
import Footer from './Footer/Footer';
function Home() {
  const [input, setInput] = useState("");

  const SearchProduct=(arg)=>{
    console.log(arg);
    setInput(arg)

  }
  return (
    <>
    <Navbar SearchProduct={SearchProduct}/>
    {/* <Navproduct/> */}
    <HeroBanner />
    <Product searchData={input}/>
    <Footer />
    </>
  )
}

export default Home