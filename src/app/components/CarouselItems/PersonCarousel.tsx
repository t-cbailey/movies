"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
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
          breakpoints={{
            300: { slidesPerView: 2, effect: "slide" },
            768: { slidesPerView: 4, effect: "coverflow" },
            1024: { slidesPerView: 5 },
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            slideShadows: true,
          }}
          centeredSlides={false}
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
