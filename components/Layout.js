import React from "react";
import Banner from "./dropdown/Banner";

export default function Layout({children}) {
  return (
    <div>
      <Banner />
      {children}

    </div>
  )
}