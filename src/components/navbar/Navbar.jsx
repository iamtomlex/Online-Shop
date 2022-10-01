import './navbar.css'

import { Link } from 'react-router-dom'

import { FaBars,FaUser } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'

import { useCartContext } from '../../global/CartContext'

const Navbar = () => {
  const { qty,openSidebar } = useCartContext()
  return (
    <nav className='nav'>
      <div className='nav-header'>
        <button className='nav-toggle' onClick={openSidebar}>
          <FaBars className='open' />
        </button>
        <Link to='/'>
          <h2>Tom Express</h2>
        </Link>
      </div>

      <div className='us'>
        <Link to='/' className="user">
          <i><FaUser/></i>
          <h4>Account</h4>
        </Link>
        <Link to='/cart' className='shopping-cart'>
          <div className='cart-icon-container'>
            <MdOutlineShoppingCart className='shopping-cart-icon' />
            <p className='cart-count'>{qty}</p>
          </div>
          <h4 className='cn'>Cart</h4>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
