
import React from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Believe from "@/components/Believe";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Quality from "@/components/Quality";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <header id="home" className="hero-pattern">
        <Navigation />
        <Hero />
      </header>
      <About />
      <Believe />
      <Products />
      <Industries />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
