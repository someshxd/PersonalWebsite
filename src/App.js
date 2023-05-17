import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import MIdSection from "./Components/MidSection/MIdSection";
import Services from "./Components/Services/Services";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact.";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App" is="home">
      <Topbar />
      <MIdSection />
      <Services />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
