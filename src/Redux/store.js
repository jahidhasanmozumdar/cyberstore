import { createStore } from "redux";
import productReducer from "./Reducer/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(productReducer,composeWithDevTools());
