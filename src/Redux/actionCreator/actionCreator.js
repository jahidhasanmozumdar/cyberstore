import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from "../actionType/actionType";

export const addToCart = (user) => {
  return {
    type: ADD_TO_CART,
    payload: user,
  };
};

export const removeToCart = (user) => {
  return {
    type: REMOVE_TO_CART,
    payload: user,
  };
};

export const increaseQuantity = (user) => {
  return {
    type: INCREASE_QUANTITY,
    payload: user,
  };
};
export const decreaseQuantity = (user) => {
  return {
    type: DECREASE_QUANTITY,
    payload: user,
  };
};
