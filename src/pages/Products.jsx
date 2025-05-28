import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MediaCard from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import { fetchProducts } from '../redux/slices/productsSlice'
import { fetchCategories } from '../redux/slices/categorySlice'

import '../style/Products.css'
import Category from './Category'

const Products = () => {
	const dispatch = useDispatch()
	const { products, loading, error } = useSelector(state => state.products)
	const { selectCategory } = useSelector(state => state.category)
	const [search, setSearch] = useState('')
	
	

	const filteredProducts = products.filter(product => {
		const filteredSearch = product.slug.includes(search.toLowerCase())
		const category = selectCategory ? product.category.id === Number(selectCategory) : product

		return filteredSearch && category
	})
	
	

	useEffect(() => {
		dispatch(fetchProducts())
		dispatch(fetchCategories())
	}, [])

	if (error) return <p>{error.message}</p>

	return (
		<div className='products'>
			<Category />
			<TextField
				fullWidth
				label='Поиск...'
				id='fullWidth'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				sx={{ margin: '20px 30px' }}
			/>
			{loading
				? filteredProducts.map((_, index) => <CardSkeleton key={index} />)
				: filteredProducts.map(product => (
						<MediaCard key={product.id} product={product} />
				  ))}
		</div>
	)
}

export default Products
