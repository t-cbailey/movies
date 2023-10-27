"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import PosterCard from "./PosterCard";
import { Prog, ProgType } from "@/types";

type Props = { progArr: Prog[]; heading: string };

export default function ProgCarousel({ progArr, heading }: Props) {
  return (
    <>
      <section className="mt-12 mx-10">
        <h3 className="text-orange-400 border-l-4 pl-2 border-orange-100 text-xl font-light">
          {heading}
        </h3>
        <Swiper
          loop={true}
          slidesPerView={5}
          spaceBetween={30}
          effect={"coverflow"}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          coverflowEffect={{
            rotate: 0,
            slideShadows: true,
          }}
          centeredSlides={true}
          freeMode={true}
          className="  coverflow"
        >
          {progArr.map((prog: Prog) => {
            return (
              <SwiperSlide key={prog.id} className="text-black bg-black flex ">
                <PosterCard prog={prog} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
