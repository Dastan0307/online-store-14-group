import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import categoryReducer from './slices/categorySlice'

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		category: categoryReducer
	}
})