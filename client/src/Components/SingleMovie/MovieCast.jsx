import React from "react";
import Title from "../Title";
import { BsFillPeopleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Movies = [
  {
    src: "1.jpg",
    name: "Phim số 1",
    category: "Hành động",
    time: "2015",
  },
  {
    src: "1.jpg",
    name: "Phim số 2",
    category: "Hành động",
    time: "2015",
  },
  {
    src: "1.jpg",
    name: "Phim số 2",
    category: "Hành động",
    time: "2015",
  },
  {
    src: "1.jpg",
    name: "Phim số 2",
    category: "Hành động",
    time: "2015",
  },
  {
    src: "1.jpg",
    name: "Phim số 2",
    category: "Hành động",
    time: "2015",
  },
  {
    src: "1.jpg",
    name: "Phim số 2",
    category: "Hành động",
    time: "2015",
  },
  {
    src: "1.jpg",
    name: "Phim số 2",
    category: "Hành động",
    time: "2015",
  },
];
const MovieCast = ({cast}) => {
  return (
    <>
      <div className="my-12">
        <Title title="Cast" Icon={BsFillPeopleFill}></Title>
      </div>
      <div className="mt-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          autoplay={true}
          speed={1000}
          modules={[Autoplay, Navigation]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
                <img
                  src={`/images/movies/${movie.src}`}
                  alt=""
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p>Tom Cruise</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MovieCast;
