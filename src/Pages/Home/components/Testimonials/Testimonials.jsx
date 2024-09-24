import React from "react";
import Testimonial from "@/Components/Testimonial/Testimonial";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Data
import TetimonialsData from "./TestimonialsData.json";

function Testimonials() {
  return (
    <div className="my-20 flex h-full w-screen max-w-[1440px] items-center justify-center bg-secondary">
      <div className="TESTIMONIALS flex w-full max-w-[1280px] items-center justify-center px-5">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper py-10"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {TetimonialsData?.map((testimonial) => (
            <SwiperSlide className="flex items-center justify-center">
              <Testimonial
                key={testimonial.id}
                imageSrc={testimonial.placeImage}
                name={testimonial.name}
                profileImage={testimonial.profileImage}
                location={testimonial.location}
                rating={testimonial.rating}
                comment={testimonial.comment}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
