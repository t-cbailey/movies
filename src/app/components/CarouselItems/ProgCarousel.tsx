"use client";
import { Prog } from "@/types";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../style.css";
import PosterCard from "./PosterCard";

type Props = { progArr: Prog[]; heading: string };

export default function ProgCarousel({ progArr, heading }: Props) {
  return (
    <>
      <section className="mt-12 mx-10">
        <h3 className="text-orange-400 border-l-4 pl-2 border-orange-100 text-xl font-light">
          {heading}
        </h3>
        <Swiper
          breakpoints={{
            300: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
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
          {progArr
            .sort((a, b) => {
              if (a.vote_average < b.vote_average) return 1;
              if (a.vote_average > b.vote_average) return -1;
              return 0;
            })
            .map((prog: Prog) => {
              return (
                <SwiperSlide key={prog.id} className=" bg-black ">
                  <PosterCard prog={prog} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
}
