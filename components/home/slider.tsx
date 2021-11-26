import { useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SlideHome from './slide';

SwiperCore.use([Navigation, Pagination, A11y])

const SliderHome = (props : any) => {

    const [data] = useState(props.data)

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView='auto'
            navigation
            pagination={{ clickable: true }}
        >
            { 
                data.map((x : any, i : number) => {
                    return (
                        <SwiperSlide key={`slide-${i}`}>
                            <SlideHome modal={props.modal} data={x}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
    )
}

export default SliderHome
