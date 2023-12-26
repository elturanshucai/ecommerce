import { createSlice } from "@reduxjs/toolkit";
import images from "../../images";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDatabase: [
            {
                id: 1,
                rating: 5,
                isLiked: false,
                photo: images.trend1,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'trend',
                person: 'women',
                category: 'caps'
            },
            {
                id: 2,
                rating: null,
                isLiked: false,
                photo: images.trend2,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'trend',
                person: 'women',
                category: 'caps'
            },
            {
                id: 3,
                rating: 4,
                isLiked: true,
                photo: images.trend3,
                title: 'Lorem ipsum',
                price: 30,
                type: 'trend',
                person: 'men',
                category: 'sandals'
            },
            {
                id: 4,
                rating: 3,
                isLiked: false,
                photo: images.trend2,
                title: 'Lorem ipsum',
                price: 25.60,
                type: 'trend',
                person: 'boys',
                category: 'sandals'
            },
            {
                id: 5,
                rating: null,
                isLiked: false,
                photo: images.trend3,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'trend',
                person: 'girls',
                category: 'coats'
            },
            {
                id: 6,
                rating: 5,
                isLiked: false,
                photo: images.trend1,
                title: 'Lorem ipsum',
                price: 6.90,
                type: 'trend',
                person: 'men',
                category: 'coats'
            },
            {
                id: 7,
                rating: 5,
                isLiked: false,
                photo: images.trend3,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'trend',
                person: 'boys',
                category: 't-shirts'
            },
            {
                id: 8,
                rating: 1,
                isLiked: false,
                photo: images.trend1,
                title: 'Lorem ipsum',
                price: 8,
                type: 'trend',
                person: 'girls',
                category: 't-shirts'
            },
            {
                id: 9,
                rating: 5,
                isLiked: false,
                photo: images.trend2,
                title: 'Lorem ipsum',
                price: 15.05,
                type: 'trend',
                person: 'women',
                category: 'sandals'
            },
            {
                id: 10,
                rating: 4,
                isLiked: true,
                photo: images.trend1,
                title: 'Lorem ipsum',
                price: 180,
                type: 'trend',
                person: 'women',
                category: 't-shirts'
            },
            {
                id: 11,
                rating: 5,
                isLiked: false,
                photo: images.arrival1,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'arrival',
                person: 'men',
                category: 't-shirts'
            },
            {
                id: 12,
                rating: null,
                isLiked: false,
                photo: images.arrival2,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'arrival',
                person: 'women',
                category: 'clothes'
            },
            {
                id: 13,
                rating: 4,
                isLiked: true,
                photo: images.arrival3,
                title: 'Lorem ipsum',
                price: 30,
                type: 'arrival',
                person: 'men',
                category: 'clothes'
            },
            {
                id: 14,
                rating: 3,
                isLiked: false,
                photo: images.arrival4,
                title: 'Lorem ipsum',
                price: 25.60,
                type: 'arrival'
            },
            {
                id: 15,
                rating: null,
                isLiked: false,
                photo: images.arrival5,
                title: 'Lorem ipsum',
                price: 18.15,
                type: 'arrival'
            },
            {
                id: 16,
                rating: 5,
                isLiked: false,
                photo: images.arrival6,
                title: 'Lorem ipsum',
                price: 6.90,
                type: 'arrival'
            },
            {
                id: 17,
                rating: 4,
                isLiked: true,
                photo: images.arrival4,
                title: 'Lorem ipsum',
                price: 25.60,
                type: 'arrival'
            },
            {
                id: 18,
                rating: 4,
                isLiked: false,
                photo: [images.discount1],
                title: 'Canta',
                price: 60,
                discountPercent: 50,
                type: 'discount',
                colors: ['brown']
            },
            {
                id: 19,
                rating: null,
                isLiked: false,
                photo: [images.discount2],
                title: 'Salvar',
                price: 48,
                discountPercent: 20,
                type: 'discount',
                colors: ['blue', 'black'],
                sizes: ['30', '32', '34', '36']
            },
            {
                id: 20,
                rating: 5,
                isLiked: false,
                photo: [images.discount3, images.discount1, images.arrival1],
                title: 'Ayaqqabi',
                price: 85,
                discountPercent: 30,
                type: 'discount',
                colors: ['red', 'black'],
                sizes: ['36', '37', '38', '39', '40', '41']
            },
            {
                id: 21,
                rating: 4,
                isLiked: false,
                photo: [images.discount1],
                title: 'Canta 2',
                price: 43,
                discountPercent: 15,
                type: 'discount',
                colors: ['red']
            },
        ]
    },
    reducers: {
        likeProduct: (state, { payload }) => {
            state.productDatabase.map(item => {
                if (item.id === payload) {
                    if (item.isLiked) {
                        item.isLiked = false
                    } else {
                        item.isLiked = true
                    }
                }
            })
        }
    }
})

export const { likeProduct } = productSlice.actions;
export default productSlice.reducer