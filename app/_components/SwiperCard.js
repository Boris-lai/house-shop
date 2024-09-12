"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Img1 from "@/public/images/houseCard001.jpg";
import Img2 from "@/public/images/houseCard002.jpg";
import Img3 from "@/public/images/houseCard003.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function SwiperCard() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperCard;
