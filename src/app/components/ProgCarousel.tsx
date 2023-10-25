"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import PosterCard from "./PosterCard";
import { Prog } from "@/types";

type Props = { progArr: Prog[]; heading: string };

export default function ProgCarousel({ progArr, heading }: Props) {
  return (
    <>
      <section className="mt-24 mx-10">
        <h1>{heading}</h1>
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
              prog.poster_path && (
                <SwiperSlide
                  key={prog.id}
                  className="text-black text-center text-xl bg-black flex justify-center items-center "
                >
                  <PosterCard prog={prog} />
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
