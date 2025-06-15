"use client";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import TestimonialCard from "./testimonial-card";
import testimonialsData from "@/data/testimonials";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselNavigationButton from "./navigation-button";
const TestimonialCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2">
        <CarouselNavigationButton ref={prevRef}>
          <ChevronLeft />
        </CarouselNavigationButton>
      </div>
      <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2">
        <CarouselNavigationButton ref={nextRef}>
          <ChevronRight />
        </CarouselNavigationButton>
      </div>

      <div className="w-full py-16">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="w-full px-4"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[300px] sm:!w-[400px] md:!w-[500px]"
            >
              <TestimonialCard index={index} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
