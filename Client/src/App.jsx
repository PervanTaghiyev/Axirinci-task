import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import BasketPage from './Pages/BasketPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    <Route path="/basket" element={<BasketPage/>}/>
    <Route path="/product/:id" element={<ProductDetailsPage/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
