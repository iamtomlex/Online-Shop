import './category.css'

import { Navigation, Scrollbar } from 'swiper'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Category = ({ desc, children, color }) => {
  const styles ={
    backgroundColor:color
  }
  return (
    <div className='category-container '>
      <div className='category-header' style={styles}>
        <div className='d1'>
          <h3 className='category-header-title'>Top Deals</h3>
          <p className='category-header-desc'>{desc}</p>
        </div>
        <div className='d2'>
          <h4 className='see-all-btn'>see all</h4>
        </div>
      </div>

      <Swiper
        modules={[Scrollbar,Navigation]}
        spaceBetween={10}
        slidesPerView={'auto'}
        grabCursor={true}
        navigation
        scrollbar={{ draggable: true }}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Category
