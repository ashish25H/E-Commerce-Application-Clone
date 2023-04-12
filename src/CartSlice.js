import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  ProductArray: [],
};

export const productCartSlice = createSlice({
  name: "ProductCart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = {
        // image: action.payload[0],
        // name: action.payload[1],
        // price: action.payload[2],
        // category: action.payload[3],

        image:action.payload.img,
        price:action.payload.price,
        name:action.payload.name,
        category:action.payload.category,
      };

      if (
        state.ProductArray.some((pro) =>
          pro.name === product.name ? true : false
        )
      ) {
        console.log(`Present in Cart`);
      } else {
        state.ProductArray.push(product);
      }
    },
  },
});

export const { addProductToCart } = productCartSlice.actions;
export default productCartSlice.reducer;
