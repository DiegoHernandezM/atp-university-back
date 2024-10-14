import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const CoursesGallery = ({ courses }) => {
  return (
    <section id="courses" className="courses-section py-20 relative bg-gradient-to-b from-[#EEEEEE] to-[#BDBDBD]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">NUESTROS CURSOS</h2>
        <Swiper
          spaceBetween={30}
          navigation
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="p-8"
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          style={{ height: '500px', '--swiper-navigation-color': 'white', '--swiper-pagination-color': 'white' }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <Card className="shadow-lg group overflow-hidden bg-transparent relative h-full w-full">
                <CardBody className="relative h-full w-full p-0">
                  <img
                    src={course.cover}
                    alt={course.title}
                    className="h-full w-full object-cover group-hover:opacity-50 transition duration-200"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/70">
                    <Typography variant="h2" color="white" className="mb-2">
                      {course.title}
                    </Typography>
                    <Typography color="white" className="mb-4 text-center">
                      {course.description}
                    </Typography>
                    <Typography variant="h6" color="white" className="mb-4">
                      ${course.price}
                    </Typography>
                    <Button style={{ backgroundColor: '#203764' }}>Inscribirse</Button>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoursesGallery;
