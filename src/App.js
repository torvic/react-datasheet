import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import StorePage from './pages/StorePage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<StorePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
