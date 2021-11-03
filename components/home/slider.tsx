import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SlideHome from './slide';

SwiperCore.use([Navigation, Pagination, A11y])

const SliderHome = (props : any) => {

    const [data] = useState(props.data)

    const [numberSlide, setNumberSlide] = useState(5)

    useEffect(() => {

        updateSlide()
        
    }, [])

    const updateSlide = () => {
        const WIDTH = window.innerWidth


        if(WIDTH >= 1950) {
            setNumberSlide(5)
        } else if(WIDTH >= 1200) {
            setNumberSlide(4)
        } else {
            setNumberSlide(1)
        }

    }

    window.addEventListener('resize', () => {
        updateSlide()
    })

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView='auto'
            navigation
            pagination={{ clickable: true }}
        >
            { 
                data.map((x : any, i : number) => {
                    console.log(x)
                    return (
                        <SwiperSlide key={`slide-${i}`}>
                            <SlideHome data={x}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
    )
}

export default SliderHome
