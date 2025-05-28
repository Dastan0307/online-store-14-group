import TextField from '@mui/material/TextField'
import { useState } from 'react'
import '../style/CreateProduct.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const API = 'https://api.escuelajs.co/api/v1/products'

const CreateProduct = () => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [description, setDescription] = useState('')
	const [categoryId, setCategoryId] = useState(0)
	const [images, setImages] = useState([''])
	
	const navigate = useNavigate()

	const handleImageUrlChange = (e, index) => {
		const updateUrls = [...images]
		updateUrls[index] = e.target.value
		setImages(updateUrls)
	}

	const handleAddImage = () => {
		setImages([...images, ''])
	}

	const handleCreateProduct = async () => {
		if (title && price > 0 && description && categoryId > 0 && images.every(url => url !== '')) {
			try {
				
				const product = {
					title,
					price,
					description,
					categoryId, 
					images
				}

				await axios.post(API, product)
				toast.success('Товар успешно создан')
				navigate('/')

			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Заполните все поля')
		}
	}

	return (
		<div className='create-product'>
			<TextField
				id='outlined-basic'
				label='Название'
				variant='outlined'
				type='text'
				className='category__title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				id='outlined-basic'
				label='Цена'
				variant='outlined'
				type='number'
				className='category__price'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<textarea
				type='text'
				placeholder='Описание'
				className='category__description' 
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<TextField
				id='outlined-basic'
				label='Категория'
				variant='outlined'
				type='number'
				className='category__categoryId'
				value={categoryId}
				onChange={(e) => setCategoryId(e.target.value)}
			/>
			<div className='category__images'>
				{
					images.map((url, index) => (
						<div key={index} className='category__image'>
							<TextField
								id='outlined-basic'
								label='URL Картинка'
								variant='outlined'
								type='text'
								className='category__image'
								onChange={(e) => handleImageUrlChange(e, index)}
							/>
						</div>
					))
				}
			</div>
			<button className='category__btn_add-image' onClick={handleAddImage}>Добавить картинку</button>
			<button className='category__btn' onClick={handleCreateProduct}>Создать</button>
		</div>
	)
}

export default CreateProduct
