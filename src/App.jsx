import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoReel from "./components/LogoReel";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import Users from "./components/Users";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoReel />
      <Showcase />
      <Pricing />
      <Users />
    </div>
  )
}

export default App
