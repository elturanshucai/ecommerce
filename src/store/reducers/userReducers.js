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
            let product = state.userBasket.filter(item => (item.id === payload.id) && (item.color === payload.color) && (item.size === payload.size))[0]
            if (product) {
                if (product.size === payload.size && product.color === payload.color) {
                    state.userBasket.map(item => {
                        if (item.id === product.id) item.count += 1
                    })
                } else {
                    state.userBasket = [...state.userBasket, payload]
                }
            } else {
                state.userBasket = [...state.userBasket, payload]
            }
        },
        removeBasketProduct: (state, { payload }) => {
            state.userBasket = state.userBasket.filter((_, index) => index != payload)
        }
    }
})
export const { setUser, addBasketProduct, logoutUser, removeBasketProduct } = userSlice.actions
export default userSlice.reducer