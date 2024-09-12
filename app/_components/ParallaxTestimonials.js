"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import user1 from "@/public/images/user-1.jpg";
import user2 from "@/public/images/user-2.jpg";
import user3 from "@/public/images/user-3.jpg";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function ParallaxTestimonials() {
  return (
    <>
      <div className="container mx-auto pb-8 pt-4 text-center sm:text-2xl">
        CUSTOMER FEEDBACK
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#333",
          "--swiper-pagination-color": "#333",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          //   style={{
          //     "background-image": `${Bg1}`,
          //   }}
          data-swiper-parallax="-53%"
        ></div>

        <SwiperSlide>
          {/* <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div> */}
          <div className="subtitle pb-4 text-xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="mb-10 px-12 md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div> */}
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="mb-10 px-12 md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div> */}
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="sm:text-md mb-10 px-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ParallaxTestimonials;
