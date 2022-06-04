import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import React, { useState, useEffect } from "react";

export default function Layout({children}) {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? ( <Navbar /> ) : ( <Sidebar /> )}
      {children}
      <Footer />
    </div>
  )
}