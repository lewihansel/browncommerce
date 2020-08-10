import React from "react";
import { useStateValue } from "../../context/GlobalState";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";

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
      <Link to={`${id}/details`}>
        <img
          className="checkoutProduct__image"
          src={image}
          alt={`product : ${title}`}
        />
      </Link>
      <div className="checkoutProduct__info">
        <Link to={`${id}/details`} className="checkoutProduct__title">
          {title}
        </Link>

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
