import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, baseUrl } from "./api";
// import jwt_decode from "jwt-decode";
import axios from "axios";
import { build } from "joi";

const initialState = {
    userToken: null,
    user: null,
    userCart: null,
    loading: null,
    error: false,
}

export const userAuth = createAsyncThunk("users/get", async (user, { rejectWithValue }) => {
    let response = await Login(user);
    console.log("from redux", response)

    if (response.success) {
        let userData = { "email": response.email, "userName": response.name, "userId": response.user_id }
        localStorage.setItem("userToken", response.token);
        console.log(" successss ")
        // let userCart = await axios.post(`${baseUrl}/viewcart.php`, {
        //     "user_id": +response.user_id,
        //     "token": response.token
        // });
        // console.log("userCart", userCart)
        return { userData, userToken: response.token, userCart: [] };
    } else {
        return rejectWithValue(response);
    }

});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        Logout: (state) => {
            localStorage.removeItem("userToken");
            state.userToken = null
            state.user = null
            state.userCart = null
        },
        emptyUserCart: (state) => {
            state.userCart = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userAuth.pending, (state, action) => {
            state.loading = true;
            state.error = null
        })
            .addCase(userAuth.fulfilled, (state, action) => {
                console.log("full action.payload", action.payload)
                state.loading = false;
                state.user = action.payload.userData
                state.userToken = action.payload.userToken;
                state.userCart = action.payload.userCart;
                state.error = null
            })
            .addCase(userAuth.rejected, (state, action) => {
                console.log("reg action.payload", action.payload)
                state.loading = false;
                state.error = (action.payload) ? action.payload.message : "pass or email not correct";
                state.user = null;
                state.userToken = null;
                state.userCart = null
            })
    }

})

export const { Logout, emptyUserCart } = userSlice.actions;

export default userSlice.reducer;