import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import React, { useState, useEffect } from "react";

export default function Layout({children}) {
  return (
    <div>
      <Sidebar />
      {children}
      <div></div>
      <Footer />
    </div>
  )
}