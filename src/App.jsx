import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Cart from './pages/Cart'
import CreateProduct from './pages/CreateProduct'
import MainPage from './pages/MainPage'
import Products from './pages/Products'

import './App.css'

function App() {
	return (
		<>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/products' element={<Products />} />
				<Route path='/create-product' element={<CreateProduct />} />
			</Routes>
		</>
	)
}

export default App
