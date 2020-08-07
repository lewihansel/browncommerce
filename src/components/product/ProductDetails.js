import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { projectDB } from "../../config/firebase";
import { useStateValue } from "../../context/GlobalState";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [itemQuantity, setItemQuantity] = useState(0);
  const [{ cart }, dispatch] = useStateValue();
  // console.log(product);

  useEffect(() => {
    projectDB
      .collection("products__brownCommerce")
      .doc(id)
      .get()
      .then((docs) => {
        setProduct({ ...docs.data(), id: docs.id });
      });
  }, [id]);

  const addToCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };

  const addQuantity = (e) => {
    e.preventDefault();
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
    <div>
      <Navbar />
      <div className="productDetails">
        <div className="productDetails__left">
          <img
            className="productDetails__photo"
            src={product.image}
            alt={`product: ${product.title}`}
          />
        </div>
        <div className="productDetails__right">
          <span className="productDetails__title">{product.title}</span>
          <p className="productDetails__price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>

          <form className="productDetails__form">
            <button
              className="productDetails__addToCartButton"
              onClick={itemQuantity === 0 ? addToCart : addQuantity}
            >
              {" "}
              <AddShoppingCartIcon style={{ fontSize: 14 }} />
              {itemQuantity === 0 ? "add to cart" : "add quantity"}
            </button>
            {itemQuantity > 0 && (
              <input
                min="0"
                type="number"
                size="2"
                value={itemQuantity}
                onChange={changeQuantity}
              />
            )}
          </form>
          <span className="productDetails__description">
            {product.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
