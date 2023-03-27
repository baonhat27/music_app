import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Banner from '@/src/components/Banner'
import 'swiper/css'
import {Autoplay, Pagination} from 'swiper'
import bannerSample from './banner'

const autoplay = {
  delay: 3000,
  disableOnInteraction: false,
}
const pagination = {
  clickable: true,
}
const modules = [Autoplay, Pagination]

function SlideBanner() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={bannerSample.length > 1 ? autoplay : false}
        pagination={pagination}
        navigation={true}
        modules={modules}
      >
        {bannerSample.map((banner) => (
          <SwiperSlide key={banner}>
            <Banner url={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideBanner
