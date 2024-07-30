import React from "react";
import Header from "./Header";
import Portal from "./Portal";
import Footer from "./Footer";
import "./globals.css";

const Page = () => {
  return (
    <>
      {/* <div className="container"> */}
        <Header />
        <Portal />
        <Footer />
      {/* </div> */}
    </>
  )
}
export default Page;