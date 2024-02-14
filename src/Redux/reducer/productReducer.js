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
      console.log("Adding to cart:", action.payload.id);
      const existingPayloadData = getCartDataFromLocalStorage();
      console.log("existingPayloadData", existingPayloadData);
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
        console.log("Updated Cart:", updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it with quantity 1
        let storeData = [...state.cart, { ...action.payload, quantity: 1 }];
        setLocalStorageData(storeData);
        console.log("storeData:", storeData);
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_TO_CART: {
      const existingPayloadData = getCartDataFromLocalStorage();
      let removeData = existingPayloadData?.filter(
        (product) => product._id !== action.payload._id
      );
      setLocalStorageData(removeData);

      return {
        ...state,
        cart: existingPayloadData?.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    }

    case INCREASE_QUANTITY: {
      const existingPayloadData = getCartDataFromLocalStorage();
      console.log(existingPayloadData);
      return {
        ...state,
        cart: existingPayloadData?.cart?.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state?.cart?.map((item) =>
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
