import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/GlobalState";
import { getCartTotal } from "../../context/reducer";

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} products): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="text" placeholder="have a coupon code?" />
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
