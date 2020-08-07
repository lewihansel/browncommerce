import React from "react";
import { useStateValue } from "../../context/GlobalState";
import { useEffect } from "react";
import { useState } from "react";

const Product = ({ id, title, image, price, rating, quantity }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{ cart }, dispatch] = useStateValue();
  const [itemQuantity, setItemQuantity] = useState(0);
  // console.log(title, "=>", itemQuantity);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      product: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    });
    dispatch({
      type: "UPDATE",
    });
  };

  const addQuantity = () => {
    dispatch({
      type: "ADD_QUANTITY",
      id,
    });
  };

  const changeQuantity = (e) => {
    if (e.target.value === "0") {
      setItemQuantity(0);
      dispatch({
        type: "REMOVE_FROM_CART",
        id,
      });
    } else {
      dispatch({
        type: "CHANGE_QUANTITY",
        id,
        quantity: e.target.value,
      });
    }
  };

  useEffect(() => {
    cart.map((item) => {
      if (item.id === id) {
        setItemQuantity(item.quantity);
      }
    });
  }, [cart]);

  return (
    <div className="product">
      <div className="product__info">
        <h3>{title}</h3>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <p key={i}>⭐</p>
            ))}
        </div> */}
      </div>

      <img src={image} alt="" />

      <button onClick={itemQuantity === 0 ? addToCart : addQuantity}>
        {itemQuantity === 0 ? "add to cart" : `add item : ${itemQuantity}`}
      </button>

      {itemQuantity > 0 && (
        <form className="product__quantity">
          <input
            min="0"
            type="number"
            size="2"
            value={itemQuantity}
            onChange={changeQuantity}
          />
        </form>
      )}
    </div>
  );
};

export default Product;
