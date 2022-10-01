import { useProductContext } from '../../global/ProductsContext'
import './products.css'

import  { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useCartContext } from '../../global/CartContext'

const Products = () => {
  const { products } = useProductContext()
  const { addToCart } = useCartContext()
  return (
    <div className='products container'>
      <h3>Products</h3>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={10}
        slidesPerView={'auto'}
        grabCursor={true}
        scrollbar={true}
      >
        {products.map((product) => {
          const { id, name, price, image, status } = product

          return (
            <SwiperSlide key={id} className='product'>
              <div className='product-image'>
                <img src={image} alt='not found' />
              </div>
              <div className='product-details'>
                <div className='product-name'>{name}</div>
                <div className='product-price'>${price}.00</div>
              </div>

              <div
                className='add-to-cart'
                onClick={() => addToCart(id, product)}
              >
                Add to cart
              </div>
              {status === 'hot' ? <div className='hot'>Hot</div> : ''}
              {status === 'new' ? <div className='new'>New</div> : ''}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Products
