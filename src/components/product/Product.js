import React from "react";
import { useStateValue } from "../../context/GlobalState";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
    console.log([...cart]);
    // dispatch({
    //   type: "PUSH_CART",
    // });
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
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      if (item.id === id) {
        setItemQuantity(item.quantity);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className="product">
      <Link to={`${id}/details`} className="product__info">
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
      </Link>
      <Link to={`${id}/details`}>
        <div className="product__imageContainer">
          <img src={image} alt="" />
        </div>
      </Link>

      <div className="product__form">
        <button
          className="product__cartButton"
          onClick={itemQuantity === 0 ? addToCart : addQuantity}
        >
          <AddShoppingCartIcon style={{ fontSize: 14 }} />
          {itemQuantity === 0 ? "add to cart" : "add quantity"}
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
    </div>
  );
};

export default Product;
