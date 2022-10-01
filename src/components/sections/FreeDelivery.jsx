import Category from '../category/Category'
import CategoryInfo from '../category-info/CategoryInfo'

import {  SwiperSlide } from 'swiper/react'

import { freeDelivery } from '../../data'

const FreeDelivery = () => {
  return (
    <Category desc='free delivery' color={'#fdecf0'}>
      {freeDelivery.map((item) => {
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

export default FreeDelivery
