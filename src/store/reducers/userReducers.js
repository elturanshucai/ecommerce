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
            let product = state.userBasket.filter(item => item.id == payload.id)[0]
            if (!product) state.userBasket = [...state.userBasket, payload]
        },
        removeBasketProduct: (state, { payload }) => {
            state.userBasket = state.userBasket.filter(item => item.id != payload.id)
        }
    }
})
export const { setUser, addBasketProduct, logoutUser, removeBasketProduct } = userSlice.actions
export default userSlice.reducer