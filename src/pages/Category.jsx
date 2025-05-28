import { useDispatch, useSelector } from 'react-redux'
import { setSelectCategory } from '../redux/slices/categorySlice'
import '../style/Category.css'

const Category = () => {
	const { categories, selectCategory } = useSelector(state => state.category)
	const dispatch = useDispatch()
	

	return (
		<select value={selectCategory} onChange={(e) => dispatch(setSelectCategory(e.target.value))} className='category'>
			<option value=''>Все категории</option>
			{categories.map(category => (
				<option value={category.id} key={category.id}>
					{category.name}
				</option>
			))}
		</select>
	)
}

export default Category
