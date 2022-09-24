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
          <Product id="001" title='Fossil
Gen 6 Smartwatch with AMOLED Screen, Snapdragon 4100+ Wear' price={24995.00} image= "https://m.media-amazon.com/images/I/51oWvyUWJSL._UX522_.jpg" rating={5} />
          <Product id="002" title='Oneplus 8T: 12 gb 256 gb' price={45999.00} image="https://m.media-amazon.com/images/I/71F1UHkmZsL._SX679_.jpg" rating={5} />
         </div>
         <div className="home__row">
         <Product id="003" title='Belkin Essential Series 6-Socket Surge Protector Universal Socket' price={1079.00} image="https://m.media-amazon.com/images/I/41CbvmXIQPS._SY879_.jpg" rating={5} />
         <Product id="004" title='Borosil Hydra' price={750.00} image="https://m.media-amazon.com/images/I/41wc4j4OOmL._SX679_.jpg" rating={5} />
         <Product id="005" title='Logitech G213 Prodigy Gaming Keyboard' price={3800.00} image="https://m.media-amazon.com/images/I/61Nt8geXzWL._SX522_.jpg" rating={5} />
         </div>
         <div className="home__row">
         <Product id="006" title='2020 Apple Mac Mini (Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) -Silver' price={58990.00} image="https://m.media-amazon.com/images/I/71pcTYT+ICL._AC_UY218_.jpg" rating={5} />
         </div>
      </div>
    </div>
  )
}

export default Home