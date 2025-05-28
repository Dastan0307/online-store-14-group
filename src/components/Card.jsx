import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'
import { deleteProduct } from '../redux/slices/productsSlice'

import '../style/Card.css'

export default function MediaCard({ product }) {
	const dispatch = useDispatch()

	return (
		<Card
			sx={{
				maxWidth: 345,
				width: '100%',
				margin: '30px 0',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<Link to={`/product-details/${product.id}`}>
				<CardMedia
					sx={{ height: 220, objectFit: 'contain', backgroundSize: 'contain' }}
					image={product.images[0]}
					title='green iguana'
				/>
			</Link>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{product.title}
				</Typography>
				<Typography variant='body2' sx={{ color: 'text.secondary' }}>
					Цена: <span className='card__title'>{product.price}</span>
				</Typography>
			</CardContent>
			<CardActions
				sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
			>
				<Link to={`/edit-product/${product.id}`}>
					<Button variant='outlined' startIcon={<EditIcon />} color='success'>
						Изменить
					</Button>
				</Link>
				<Button
					variant='outlined'
					startIcon={<DeleteIcon />}
					color='error'
					onClick={() => dispatch(deleteProduct(product.id))}
				>
					Удалить
				</Button>
			</CardActions>
			<Button
				variant='contained'
				startIcon={<ShoppingCartIcon />}
				color='primary'
				onClick={() => dispatch(addToCart(product))}
			>
				В корзину
			</Button>
		</Card>
	)
}
