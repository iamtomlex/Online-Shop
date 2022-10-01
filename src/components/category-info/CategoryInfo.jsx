import './categoryInfo.css'
import { FaPlus } from 'react-icons/fa'
import { useCartContext } from '../../global/CartContext'


const CategoryInfo = ({ image, name, price, discount, id, title }) => {
  const { addToCart } = useCartContext()
  return (
    <div className='category-info'>
      <div className='category-info-image'>
        <img src={image} alt='' />
      </div>
      <div className='category-info-name'>
        <p>{name.length>14 ? `${name}...` : name}</p>
      </div>
      <div className='category-info-price'>
        <h3>${price}.00</h3>
        <button onClick={() => addToCart(id, title)}>
          <FaPlus />
        </button>
      </div>
      <div className='category-info-discount'>-{discount}%</div>
    </div>
  )
}

export default CategoryInfo
