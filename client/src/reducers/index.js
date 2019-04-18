import { combineReducers } from "redux";
import shop from "./shop.reducer";
import { brandFilterReducer } from "./brand.filter.reducer";
import { orderByPriceReducer } from "./orderByPrice.filter.reducer";
import { paginationReducer } from "./pagination.reducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import productReducer from "./products.Reducer";

export default combineReducers({
  shop,
  brandFilter: brandFilterReducer,
  orderBy: orderByPriceReducer,
  pagination: paginationReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  product: productReducer
});
