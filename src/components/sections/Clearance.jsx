import Category from '../category/Category'
import CategoryInfo from '../category-info/CategoryInfo'

import {  SwiperSlide } from 'swiper/react'

import { clearance } from '../../data'

const Clearance = () => {
  return (
    <Category desc='clearance' color={'#fee2cc'}>
      {clearance.map((item) => {
        const { id, image, price, discount, name } = item

        return (
          <SwiperSlide key={id}>
            <CategoryInfo
              image={image}
              price={price}
              discount={discount}
              name={name.substring(0, 15)}
              id={id}
              title={item}
            />
          </SwiperSlide>
        )
      })}
    </Category>
  )
}

export default Clearance
