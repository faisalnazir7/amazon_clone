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
          <Product title='Oneplus 8T: 12 gb 256 gb' price={45999.00} image={<img className="home__image" src="https://www.amazon.com/OnePlus-Aquamarine-Unlocked-Android-Smartphone/dp/B08KXB3R7S" alt="banner" />} rating={5} />
         </div>
         <div className="home__row">
         <Product title='Borosil Hydra' price={750.00} image= {<img className="home__image" src={homeBanner} alt="banner" />} rating={5} />
         <Product title='Borosil Hydra' price={750.00} image= {<img className="home__image" src={homeBanner} alt="banner" />} rating={5} />
         <Product title='Borosil Hydra' price={750.00} image= {<img className="home__image" src={homeBanner} alt="banner" />} rating={5} />
         </div>
         <div className="home__row">
         <Product title='Borosil Hydra' price={750.00} image= {<img className="home__image" src={homeBanner} alt="banner" />} rating={5} />
         </div>
      </div>
    </div>
  )
}

export default Home