import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ProductService from "@/services/product.service.js";

export const addItemById = createAsyncThunk(
    'cart/addItemById',
    async ({id, quantity}, thunkAPI) => {
        const response = await ProductService.read(id)
        return {
            product: response.data,
            quantity
        }
    }
)

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
    extraReducers: (builder) => {
        builder.addCase(addItemById.fulfilled, (state, action) => {
            const {product, quantity} = action.payload
            const index = state.items.findIndex(item => item.product.id === product.id)
            if (index < 0) {
                state.items.push(action.payload)
            } else {
                state.items[index].quantity += quantity
            }
        })
    },
})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer
