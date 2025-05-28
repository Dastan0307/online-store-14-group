import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'
import { deleteProduct, getProductById } from '../redux/slices/productsSlice'
import '../style/ProductDetails.css'

const ProductDetails = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { productById } = useSelector(state => state.products)

	const [selectImg, setSelectImg] = useState(null)

	const handleClickImage = image => {
		setSelectImg(image)
	}

	useEffect(() => {
		dispatch(getProductById(id))
	}, [dispatch, id])

	useEffect(() => {
		setSelectImg(productById?.images[0])
	}, [productById])

	return (
		<div className='product__details'>
			{productById && (
				<div className='product__images'>
					{productById.images.map(img => (
						<img
							src={img}
							alt='Error :('
							width={130}
							onClick={() => handleClickImage(img)}
						/>
					))}
				</div>
			)}
			<img src={selectImg} alt='Error :(' width={500} />
			<div className='product__info'>
				<h2 className='product__title'>
					<span>Название:</span> {productById?.title}
				</h2>
				<p className='product__price'>
					<span>Цена:</span> {productById?.price} сом
				</p>
				<p className='product__description'>
					<span>Описание:</span> {productById?.description}
				</p>
				<p className='product__category'>
					<span>Категория:</span> {productById?.category?.name}
				</p>
				<div className='btns'>
					<Button
						variant='contained'
						startIcon={<ShoppingCartIcon sx={{ color: 'white' }} />}
						color='primary'
						onClick={() => dispatch(addToCart(productById))}
					>
						Добавить в корзину
					</Button>
					<Button
						variant='outlined'
						startIcon={<DeleteIcon sx={{ color: 'red' }} />}
						color='error'
						onClick={() => dispatch(deleteProduct(productById.id))}
					>
						Удалить
					</Button>
					<Button variant='outlined' startIcon={<EditIcon sx={{ color: 'green' }} />} color='success'>
						Изменить
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
