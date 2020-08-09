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
        // src="https://images.unsplash.com/photo-1547822281-5c9d3ab15297?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        // src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="hero"
      />
      <div className="home__hero">
        <div className="home__logo">
          <img
            // src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_Commerce%2FLogo%20Light.svg?alt=media&token=a781ccc7-8262-4cb2-a7a4-0199d5c1e331"
            src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_Commerce%2FLogo%20Dark.svg?alt=media&token=3ac23da0-488e-4c0e-a59b-734dddc39f8e"
            alt=""
          />
          <div>
            <strong>Brown</strong>
            <span>Commerce</span>
          </div>
        </div>
        <div className="home__Description">
          Your all in one shopping solution. We provide you curated fashion
          products for your everyday need. We choose only the best product for
          our catalog, with 30 day money back guarantee*.
        </div>
      </div>
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
