import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        userBasket: []
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.currentUser = payload;
        },
        logoutUser: (state) => {
            state.currentUser = null
        },
        addBasketProduct: (state, { payload }) => {
            state.userBasket = [...state.userBasket, payload]
        },
        removeBasketProduct: (state, { payload }) => {
            state.userBasket = state.userBasket.filter((_, index) => index != payload)
        }
    }
})
export const { setUser, addBasketProduct, logoutUser, removeBasketProduct } = userSlice.actions
export default userSlice.reducer