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

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <BannerSkills />
        <Services />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
