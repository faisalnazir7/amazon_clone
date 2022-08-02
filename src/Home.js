import React from "react";
import "./Home.css";
import homeBanner from "./assets/homeBanner.webp";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className=" ">
        <img className="home__image" src={homeBanner} alt="banner" />
         <div className="home__row">
          <Product title='Borosil Hydra' price={750.00} image= {<img className="home__image" src={homeBanner} alt="banner" />} rating={5} />
          <Product />
         </div>
         <div className="home__row">
         <Product />
         <Product />
         <Product />
         </div>
         <div className="home__row">
         <Product />
         </div>
      </div>
    </div>
  )
}

export default Home