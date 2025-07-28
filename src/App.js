import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos"
import { useEffect } from 'react';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    })
    AOS.refresh()
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
