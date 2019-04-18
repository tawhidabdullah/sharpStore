import axios from "axios";

import {
  ADD_PRODUCT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_LOADING,
  DELETE_PRODUCT,
  PRODUCT_SUCCESSFULL
} from "./types";

// Add Post
export const addProductAction = PrductData => dispatch => {
  axios
    .post("/api/admin/product/addProduct", PrductData)
    .then(res => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
      dispatch({
        type: PRODUCT_SUCCESSFULL
      });
      return true;
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      return false;
    });
};

// Add Post
export const getProductAction = () => dispatch => {
  axios
    .get("/api/admin/product/addProduct")
    .then(res => {
      const products = res.data.product;
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
