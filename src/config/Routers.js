import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Modal from '../components/modal/Modal'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

import { useCartContext } from '../global/CartContext'
import Sidebar from '../components/sidebar/Sidebar'


const Routers = () => {
  const { isModalOpen  } = useCartContext()
  return (
    <Router>
      {isModalOpen && <Modal />}
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Sidebar/>
    </Router>
  )
}

export default Routers
