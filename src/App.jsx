import React from "react";
import "./App.css"
import Header from "./components/header";
import Buttons from "./components/buttons";
import Details from "./components/details";
import Footer from "./components/footer";

export default function App(){
  return (
    <div className="container">
      <Header />
      <Buttons />
      <Details />
      <Footer />
    </div>
  )
}