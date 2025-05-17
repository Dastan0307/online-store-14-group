import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import {
	clearCart,
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
} from '../redux/slices/cartSlice.js'

import { Button } from '@mui/material'
import '../style/Cart.css'

const Cart = () => {
	const { cart } = useSelector(state => state.cart)
	const dispatch = useDispatch()
	const totalPrice = cart?.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)
	console.log()

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Картинка</TableCell>
							<TableCell align='right'>Название</TableCell>
							<TableCell align='right'>Категория</TableCell>
							<TableCell align='right'>Цена</TableCell>
							<TableCell align='right'>Количество</TableCell>
							<TableCell align='right'></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cart.map(product => (
							<TableRow
								key={product.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='product'>
									<img
										src={product.images[0]}
										alt='Error :('
										style={{ width: '50px', borderRadius: '100%' }}
									/>
								</TableCell>
								<TableCell align='right'>{product.title}</TableCell>
								<TableCell align='right'>{product.category.name}</TableCell>
								<TableCell align='right'>{product.price}</TableCell>
								<TableCell
									align='right'
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'flex-end',
									}}
								>
									<button
										className='cart__btn'
										onClick={() => dispatch(incrementQuantity(product.id))}
									>
										+
									</button>
									<p style={{ margin: '2px 10px' }}>{product.quantity}</p>
									<button
										className='cart__btn'
										onClick={() => dispatch(decrementQuantity(product.id))}
									>
										-
									</button>
								</TableCell>
								<TableCell align='right'>
									<Button
										variant='contained'
										color='error'
										onClick={() => dispatch(removeFromCart(product.id))}
									>
										Удалить
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', padding: '0 15px' }}>
				<p>Общая стоимость: {totalPrice} сом</p>
				<Button
					variant='contained'
					color='error'
					onClick={() => dispatch(clearCart())}
				>
					Очистить корзину
				</Button>
			</div>
		</>
	)
}

export default Cart
