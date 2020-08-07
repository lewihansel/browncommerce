import React from "react";
import { useStateValue } from "../../context/GlobalState";

const CheckoutProduct = ({ id, title, image, price, rating, quantity }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const addQuantity = () => {
    dispatch({
      type: "ADD_QUANTITY",
      id,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };
  const changeQuantity = (e) => {
    if (e.target.value === "0") {
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

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <form>
          <input
            type="number"
            size="2"
            value={quantity}
            onChange={changeQuantity}
          ></input>
        </form>
        <button onClick={addQuantity}>Add quantity</button>
        {/* <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <p key={i}>⭐</p>
            ))}
        </div> */}

        <button onClick={removeFromCart}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
