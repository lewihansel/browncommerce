import { projectDB } from "../config/firebase";

export const initialState = {
  cart: [],
  user: null,
  products: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.product, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as it's not found in the cart`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case "ADD_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: Number(item.quantity) + 1 }
            : item
        ),
      };

    case "PUSH_CART":
      projectDB
        .collection("cart__bronwnCommerce")
        .doc(state.user.email)
        .set([...state.cart])
        .then(console.log(`${state.user.email} cart pushed`));
      return state;
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        ),
      };

    default:
      return state;
  }
};

export default reducer;
