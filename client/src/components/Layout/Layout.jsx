import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
// outlet is used to render nested routes
const Layout = () => {
  return (
    <>
      <div style={{background:"var(--black)",overflow:"hidden"}}>
        <Header />
        <Outlet />
        
      </div>
      <Footer />
    </>
  );
};

export default Layout;
