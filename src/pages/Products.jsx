import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MediaCard from '../components/Card'
import { fetchProducts } from '../redux/slices/productsSlice'
import CardSkeleton from '../components/CardSkeleton'
import '../style/Products.css'

const Products = () => {
	const dispatch = useDispatch()
	const { products, loading, error } = useSelector(state => state.products)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	if (error) return <p>{error.message}</p>

	return (
		<div className='products'>
			{loading
				? products.map((_, index) => <CardSkeleton key={index} />)
				: products.map(product => (
						<MediaCard key={product.id} product={product} />
				  ))}
		</div>
	)
}

export default Products
