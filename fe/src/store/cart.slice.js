import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'counter',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const {product, quantity} = action.payload
            const index = state.items.findIndex(item => item.product.id === product.id)
            if (index < 0) {
                state.items.push(action.payload)
            } else {
                state.items[index].quantity += quantity
            }
        }
    },
})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer
