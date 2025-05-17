import TextField from '@mui/material/TextField'
import { useState } from 'react'
import '../style/CardProduct.css'

const CreateProduct = () => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [description, setDescription] = useState('')
	const [categoryId, setCategoryId] = useState('')
	const [image, setImage] = useState('')

	return (
		<div className='category'>
			<TextField
				id='outlined-basic'
				label='Название'
				variant='outlined'
				type='text'
				className='category__title'
			/>
			<TextField
				id='outlined-basic'
				label='Цена'
				variant='outlined'
				type='number'
				className='category__price'
			/>
			<textarea
				type='text'
				placeholder='Описание'
				className='category__description'
			/>
			<TextField
				id='outlined-basic'
				label='Категория'
				variant='outlined'
				type='number'
				className='category__categoryId'
			/>
			<TextField
				id='outlined-basic'
				label='Картинка'
				variant='outlined'
				type='text'
				className='category__image'
			/>
			<button className='category__btn_add-image'>Добавить картинку</button>
			<button className='category__btn'>Создать</button>
		</div>
	)
}

export default CreateProduct
