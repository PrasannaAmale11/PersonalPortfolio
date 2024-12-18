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
import reactIcon from "./assests/skillsIcons/reactIcon.svg";
import nodeIcon from "./assests/skillsIcons/nodejsicon.svg";
import mongoIcon from "./assests/skillsIcons/mongodb.svg";
import expressIcon from "./assests/skillsIcons/expressjs.svg";
import nextjsICon from "./assests/skillsIcons/nextjs.svg";
import threejsIcon from "./assests/skillsIcons/threejs.svg";
import javascriptIcon from "./assests/skillsIcons/javascript.svg";
import typescriptIcon from "./assests/skillsIcons/typescript.svg";
import htmlIcon from "./assests/skillsIcons/html.svg";
import cssIcon from "./assests/skillsIcons/css.svg";
import socketioIcon from "./assests/skillsIcons/socketIo.svg";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(
    () => !sessionStorage.getItem("isLoaded")
  );

  const handleLoadComplete = () => {
    setLoading(false);
    sessionStorage.setItem("isLoaded", "true");
  };

  useEffect(() => {
    if (sessionStorage.getItem("isLoaded")) {
      setLoading(false);
    }
  }, []);

  const slides = [
    { src: mongoIcon },
    { src: expressIcon },
    { src: reactIcon },
    { src: nodeIcon },
    { src: nextjsICon },
    { src: threejsIcon },
    { src: javascriptIcon },
    { src: typescriptIcon },
    { src: htmlIcon },
    { src: cssIcon },
    { src: socketioIcon },
  ];

  return (
    <>
      {loading && <Preloader onLoadComplete={handleLoadComplete} />}
      {!loading && (
        <>
          <Header />
          <main className="main">
            <Home />
            <About />
          </main>
          <BannerSkills slides={slides} duration={25} />
          <main className="main">
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
