import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
