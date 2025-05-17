import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const existing = state.cart.find(item => item.id === action.payload.id)
			if (existing) {
				existing.quantity += 1
			} else {
				state.cart.push({...action.payload, quantity: 1})
			}
		},
		incrementQuantity(state, action) {
			const item = state.cart.find(item => item.id === action.payload)
			if (item) item.quantity += 1
		},
		decrementQuantity(state, action) {
			const item = state.cart.find(item => item.id === action.payload)
			if (item && item.quantity > 1) item.quantity -= 1
		},
		removeFromCart(state, action) {
			state.cart = state.cart.filter(item => item.id !== action.payload)
		},  
		clearCart(state) {
			state.cart = []
		}
	},
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer