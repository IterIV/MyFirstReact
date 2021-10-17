import { combineReducers, createStore } from "redux";
import { cartModal } from "./cartModal";
import { productModal } from "./productModal";

const rootReducer = combineReducers({
  selectedProduct: productModal,
  cartStore: cartModal,
});

export const store = createStore(rootReducer);
