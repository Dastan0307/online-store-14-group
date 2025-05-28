import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const API = 'https://api.escuelajs.co/api/v1/products'

const initialState = {
	products: [],
	productById: null,
	loading: false,
	error: null
}


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await axios.get(API)
		return response.data

	} catch (error) {
		console.log(error);
	}
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
	try {
		await axios.delete(`${API}/${id}`)
	} catch (error) {
		console.log(error);
	}
})

export const getProductById = createAsyncThunk('products/getProductById', async (id) => {
	try {
		const response = await axios.get(`${API}/${id}`)
		return response.data
	} catch (error) {
		console.log(error);
	}
})


const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
		.addCase(fetchProducts.pending, (state) => {
			state.loading = true
		})
		.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false
			state.products = action.payload
		})
		.addCase(fetchProducts.rejected, (state) => {
			state.loading = false
			state.error = 'Ошибка при загрузке'
		})

		.addCase(deleteProduct.fulfilled, (state, action) => {
			state.products = state.products.filter(product => product.id !== action.payload)
			toast.success('Товар успешно удален')
		})

		.addCase(getProductById.fulfilled, (state, action) => {
			state.productById = action.payload
		})
	}
})


export default productsSlice.reducer