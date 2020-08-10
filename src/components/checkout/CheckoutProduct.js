import React from "react";
import { useStateValue } from "../../context/GlobalState";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const CheckoutProduct = ({ id, title, image, price, rating, quantity }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  const addQuantity = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_QUANTITY",
      id,
    });
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };
  const changeQuantity = (e) => {
    if (!e.target.value) {
      dispatch({
        type: "CHANGE_QUANTITY",
        id,
        quantity: 1,
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
      <img
        className="checkoutProduct__image"
        src={image}
        alt={`product : ${title}`}
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <form>
          <input
            min="1"
            type="number"
            value={quantity}
            onChange={changeQuantity}
          ></input>
          <button className="checkoutProduct__button" onClick={addQuantity}>
            Add quantity
          </button>
          <button
            className="checkoutProduct__buttonDelete"
            onClick={removeFromCart}
          >
            <HighlightOffIcon style={{ fontSize: 19 }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutProduct;
