import {Swiper,SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation,Autoplay } from "swiper";
import axios from "axios";


// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use([Navigation,Autoplay]);


import React from 'react'
import { Image,Box, Text, VStack } from "@chakra-ui/react";

function Carousel({posts}) {

    



    
  return (
    <>
    
    <Box py={16} mx={20}>
    <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={true}
          slidesPerGroup={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        >
          {posts.coins.map(product => <SwiperSlide style={{width:'10%'}} key={product.name}><VStack> <Image src={product.iconUrl} w={'50%'}/> </VStack></SwiperSlide>)}


        </Swiper>

    </Box>

    </>
  )
}

export default Carousel
