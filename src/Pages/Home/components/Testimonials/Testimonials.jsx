import React, { useCallback, useEffect, useRef } from "react";
import Testimonial from "#/Components/Testimonial/Testimonial";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Assets
import Prev from "@/assets/Images/Testimonials/prev.png";
import Next from "@/assets/Images/Testimonials/next.png";

// Data
import TetimonialsData from "./TestimonialsData.json";

function Testimonials() {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="my-20 flex h-full w-screen max-w-[1440px] items-center justify-center bg-secondary">
      <div className="TESTIMONIALS relative flex w-full max-w-[1280px] items-center justify-center px-5">
        <Swiper // Notice how we added the attribute init="false" to make sure that the swiper will not render before have applied our custom configuration.
          ref={swiperRef}
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
        <div className="NAVIGATION_BTNS absolute -bottom-10 hidden items-center justify-between gap-10 text-primary md:flex">
          <div
            className="NEXT_BTN flex size-12 items-center justify-center rounded-full bg-accent"
            onClick={handleNext}
          >
            <img src={Prev} alt="prev icon" />
          </div>
          <div
            className="PREV_BTN flex size-12 items-center justify-center rounded-full bg-accent"
            onClick={handlePrev}
          >
            <img src={Next} alt="next icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
