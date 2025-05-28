import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'https://api.escuelajs.co/api/v1/categories'

const initialState = {
	categories: [],
	selectCategory: '',
}

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
	try {
		const res = await axios.get(API)
		return res.data
	} catch (error) {
		console.log(error);
	}
})

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setSelectCategory(state, action) {
			state.selectCategory = action.payload
		}
	},
	extraReducers: builder => {
		builder 
		.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload
		})
	}
})

export default categorySlice.reducer
export const { setSelectCategory } = categorySlice.actions 