import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from "../actionType/actionType";

const initialState = {
  cart: [],
};
function getCartDataFromLocalStorage() {
  let getCartItem;
  if (typeof localStorage !== "undefined") {
    const localStorageData = localStorage.getItem("bookingCart");
    if (localStorageData) {
      try {
        getCartItem = JSON.parse(localStorageData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        // Handle the error accordingly, e.g., return a default value or an empty object
        getCartItem = {}; // Default value or handle the error in your specific way
      }
    }
  }
  return getCartItem;
}

function setLocalStorageData(item) {
  localStorage.setItem("bookingCart", JSON.stringify(item));
}
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingPayloadData = getCartDataFromLocalStorage();

      const existingProduct = existingPayloadData?.cart?.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        // If the product is already in the cart, update its quantity

        const updatedCart = existingPayloadData?.cart?.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        setLocalStorageData({
          ...state,
          cart: updatedCart,
        });

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it with quantity 1
        let storeData = {
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
        setLocalStorageData(storeData);

        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_TO_CART: {
      const existingPayloadData = getCartDataFromLocalStorage();

      if (!existingPayloadData || !existingPayloadData.cart) {
        // Handle the case where existingPayloadData or existingPayloadData.cart is null or undefined
        return state;
      }

      const updatedCart = existingPayloadData.cart.filter(
        (product) => product._id !== action.payload._id
      );

      setLocalStorageData({ ...state, cart: updatedCart });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case INCREASE_QUANTITY: {
      const existingPayloadData = getCartDataFromLocalStorage();
      console.log(action.payload, existingPayloadData);
      let updateData = {
        ...state,
        cart: existingPayloadData?.cart?.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

      setLocalStorageData(updateData);
      return {
        ...state,
        cart: updateData,
      };
    }
    case DECREASE_QUANTITY: {
      const existingPayloadData = getCartDataFromLocalStorage();
      console.log(action.payload, existingPayloadData);

      // Find the item in the cart
      const updatedCart = existingPayloadData.cart.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Ensure quantity doesn't go below 0
          : item
      );

      // Update local storage and state
      setLocalStorageData({ ...state, cart: updatedCart });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
