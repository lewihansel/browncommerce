import React from "react";
import Product from "../product/Product";
import { useStateValue } from "../../context/GlobalState";

const Home = () => {
  const [{ products }] = useStateValue();
  // console.log("product => ", products);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="hero"
      />

      {/* product */}
      <div className="home__row">
        {products.map((product) => {
          return (
            <Product
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
              quantity={product.quantity}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
