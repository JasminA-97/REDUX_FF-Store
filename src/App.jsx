
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Routes>    
        <Route element={<Home/>} path='/'/>
        <Route element={<Wishlist/>} path='/wishlist'/>
        <Route element={<Cart/>} path='/cart'/>
        <Route element={<View/>} path='/view/:id'/>
        <Route element={<Navigate to={'/'}/>} path='/*'/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
