import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Qualification from "./components/qualifications/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/ScrollUp";
import BannerSkills from "./components/skills/BannerSkills";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(
    () => !localStorage.getItem("isLoaded")
  );

  
  const handleLoadComplete = () => {
    setLoading(false);
    localStorage.setItem("isLoaded", "true");
  };

  
  useEffect(() => {
    if (localStorage.getItem("isLoaded")) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <Preloader onLoadComplete={handleLoadComplete} />}
      {!loading && (
        <>
          <Header />
          <main className="main">
            <Home />
            <About />
            <BannerSkills />
            <Services />
            <Qualification />
            <Contact />
            <Footer />
            <Scrollup />
          </main>
        </>
      )}
    </>
  );
}

export default App;
