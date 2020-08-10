import React from "react";
import { useStateValue } from "../../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ cart }] = useStateValue();
  // console.log("cart =", cart);
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          {cart?.length === 0 ? (
            <div className="checkout__empty">
              <h2>Your chart is empty</h2>
              <p>
                You have no item in your cart. To add product to your cart,
                click the "add to cart" button, next to the product you want to
                buy.
              </p>

              <img
                src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_Commerce%2FLogo%20Dark%20Accent.svg?alt=media&token=94d5f81a-5c52-4354-a7f7-7b4c6d374ba9"
                alt=""
              />
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Shopping cart</h2>
              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  quantity={item.quantity}
                  key={item.id}
                />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
