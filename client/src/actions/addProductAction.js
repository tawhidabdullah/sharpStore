import axios from "axios";

import {
  ADD_PRODUCT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_LOADING,
  DELETE_PRODUCT
} from "./types";

// Add Post
export const addProductAction = PrductData => dispatch => {
  axios
    .post("/api/admin/product/addProduct", PrductData)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Post
export const getProductAction = () => dispatch => {
  axios
    .get("/api/admin/product/addProduct")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
