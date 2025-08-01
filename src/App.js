import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import TopProducts from "./components/TopProducts/TopProducts"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/Subscribe/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import Popup from "./components/Popup/Popup"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos"
import { useEffect, useState } from 'react';
import "aos/dist/aos.css"

function App() {
const [orderPopup, setOrderPopup ] = useState(false);
const handleOrderPopup = () => {
  setOrderPopup(!orderPopup)
}

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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

    </div>
  );
}

export default App;
