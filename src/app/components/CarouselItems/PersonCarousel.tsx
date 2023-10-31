"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import PersonCard from "./PersonCard";
import { Person } from "@/types";
import "../../../../style.css";

type Props = { personArr: Person[]; heading: string };

export default function PersonCarousel({ personArr, heading }: Props) {
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
          {personArr
            .sort((a, b) => {
              if (a.popularity < b.popularity) return 1;
              if (a.popularity > b.popularity) return -1;
              return 0;
            })
            .map((person: Person) => {
              return (
                <SwiperSlide
                  key={person.id}
                  className="text-black bg-black flex "
                >
                  <PersonCard person={person} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
}
