import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from "../actionType/actionType";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("Adding to cart:", action.payload.id);
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        // If the product is already in the cart, update its quantity
        const updatedCart = state.cart.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        console.log("Updated Cart:", updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
