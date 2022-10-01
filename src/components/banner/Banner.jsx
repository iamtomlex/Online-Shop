import './banner.css'

import SwiperCore, { Autoplay, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import banner1 from '../../assets/banner/banner-1.jpg'
import banner2 from '../../assets/banner/banner-2.jpg'
import banner3 from '../../assets/banner/banner-3.jpg'
import banner4 from '../../assets/banner/banner-4.jpg'
import banner5 from '../../assets/banner/banner-5.jpg'
import banner6 from '../../assets/banner/banner-6.jpg'

const data = [
  {
    url: banner1,
    text: 'Get your affordable deal now',
  },
  {
    url: banner2,
    text: '50% discount on your goods',
  },
  {
    url: banner3,
    text: '50% discount on your goods',
  },
  {
    url: banner4,
    text: '50% discount on your goods',
  },
  {
    url: banner5,
    text: '50% discount on your goods',
  },
  {
    url: banner6,
    text: '50% discount on your goods',
  },
]

const Banner = () => {
  SwiperCore.use([Autoplay])

  return (
    <div className='container'>
      <div className='banner'>
        <Swiper
          modules={[Autoplay, Scrollbar]}
          spaceBetween={10}
          slidesPerView={'auto'}
          grabCursor={true}
          autoplay={{ delay: 10000 }}
          scrollbar={true}
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className='banner-container'>
                  <img src={item.url} alt='' className='banner-image' />
                  <h3 className='banner-text'>{item.text}</h3>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
