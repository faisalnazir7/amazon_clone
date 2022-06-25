import React from "react";
import "./Home.css";
import homeBanner from "./assets/homeBanner.webp";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={homeBanner} alt="banner" />
      </div>
    </div>
  )
}

export default Home