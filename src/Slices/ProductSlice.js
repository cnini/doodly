const { createSlice } = require("@reduxjs/toolkit");

export const productSlice = createSlice({
    name: "product",
    initialState: [
        {
            id: 1,
            image: require('../../assets/images/blossom.png'),
            name: "Belle - Les Supers Nanas",
            price: 0.75,
            quantity: 0
        },
        {
            id: 2,
            image: require('../../assets/images/bulles.png'),
            name: "Bulle - Les Supers Nanas",
            price: 0.75,
            quantity: 0
        },
        {
            id: 3,
            image: require('../../assets/images/buttercup.png'),
            name: "Rebelle - Les Supers Nanas",
            price: 0.75,
            quantity: 0
        },
        {
            id: 4,
            image: require('../../assets/images/lisa-simpson.png'),
            name: "Lisa - Les Simpson",
            price: 0.75,
            quantity: 0
        },
        {
            id: 5,
            image: require('../../assets/images/rick-sanchez.png'),
            name: "Rick Sanchez - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            id: 6,
            image: require('../../assets/images/morty-smith.png'),
            name: "Morty Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            id: 7,
            image: require('../../assets/images/summer-smith.png'),
            name: "Summer Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            id: 8,
            image: require('../../assets/images/beth-smith.png'),
            name: "Beth Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            id: 9,
            image: require('../../assets/images/jerry-smith.png'),
            name: "Jerry Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
    ],
    reducers: {
        updateQuantity: (state, action) => {
            const { productIndex, newQuantity } = action.payload
            state[productIndex].quantity += newQuantity
            return state
        }
    }
})

export const { updateQuantity } = productSlice.actions