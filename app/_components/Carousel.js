"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";

import Img1 from "@/public/images/001.jpg";
import Img2 from "@/public/images/002.jpg";
import Img3 from "@/public/images/003.jpg";

import "swiper/css";
import "swiper/css/pagination";

function Carousel() {
  return (
    <div className="mx-auto max-w-full py-8">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image src={Img1} alt="Swiper image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img2} alt="Swiper image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img3} alt="Swiper image 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
