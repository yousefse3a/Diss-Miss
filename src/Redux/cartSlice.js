import { createSlice , current} from "@reduxjs/toolkit";
import { updateCart } from "./api";
const initialState = {
    products: [],
    quantity: 0,
    total: 0,
    cartId: null
}

export const cartSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload)
            let flag = 0;
            state.products.map((product) => {

                if ((JSON.stringify(product._id)) === (JSON.stringify(action.payload._id))) {
                    product.Amount = product.Amount + action.payload.Amount;
                    flag = 1
                }
            })
            if (flag) {
                state.total += action.payload._id.price * action.payload.Amount;
            } else {
                state.products.push(action.payload);
                state.quantity++;
                state.total += action.payload._id.price * action.payload.Amount;
            }
        },
        emptyCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        deleteCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.cartId = null
        },
        mergeUserCart: (state, action) => {
            state.cartId = action.payload._id
            action.payload.products.forEach(productAPI => {
                let flag = 0;
                state.products.map((product) => {
                    if ((JSON.stringify(product._id)) === (JSON.stringify(productAPI._id))) {
                        product.Amount = product.Amount + productAPI.Amount;
                        flag = 1
                    }
                })
                if (flag) {
                    state.total += productAPI._id.price * productAPI.Amount;
                } else {
                    state.products.push(productAPI);
                    state.quantity++;
                    state.total += productAPI._id.price * productAPI.Amount;
                }
            });
        },
        updateUserCartApi: (state, action) => {
            updateCart(action.payload, state.cartId, current(state.products));
        }

    }
})
export const { addProduct, emptyCart, mergeUserCart, updateUserCartApi, deleteCart } = cartSlice.actions;
export default cartSlice.reducer