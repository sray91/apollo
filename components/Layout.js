
import App from "./App"
import React, { useState, useEffect } from "react";

export default function Layout({children}) {
  return (
    <div>
      {/*<Sidebar />*/}
      <App />
      {children}

    </div>
  )
}