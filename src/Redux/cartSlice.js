import { createSlice, current } from "@reduxjs/toolkit";
import { addToCart, updateCart } from "./api";
const initialState = {
    products: [],
    quantity: 0,
    total: 0,
}

export const cartSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log("add products to cart", action.payload)
            let flag = 0;
            state.products.map((product) => {

                if ((JSON.stringify(product._id)) === (JSON.stringify(action.payload._id))) {
                    product.Amount = product.Amount + action.payload.Amount;
                    flag = 1
                }
            })

            if (flag) {
                state.total += action.payload.ProductDetail.price * action.payload.Amount;
            } else {
                state.products.push(action.payload);
                state.quantity++;
                state.total += action.payload.ProductDetail.price * action.payload.Amount;
            }
            addToCart(action.payload)
        },
        emptyCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        updateUserCartApi: (state, action) => {
            updateCart(action.payload, current(state.products));
        }

        // mergeUserCart: (state, action) => {
        //     action.payload.products.forEach(productAPI => {
        //         let flag = 0;
        //         state.products.map((product) => {
        //             if ((JSON.stringify(product._id)) === (JSON.stringify(productAPI._id))) {
        //                 product.Amount = product.Amount + productAPI.Amount;
        //                 flag = 1
        //             }
        //         })
        //         if (flag) {
        //             state.total += productAPI._id.price * productAPI.Amount;
        //         } else {
        //             state.products.push(productAPI);
        //             state.quantity++;
        //             state.total += productAPI._id.price * productAPI.Amount;
        //         }
        //     });
        // },

    }
})
export const { addProduct, emptyCart, mergeUserCart, updateUserCartApi, deleteCart } = cartSlice.actions;
export default cartSlice.reducer