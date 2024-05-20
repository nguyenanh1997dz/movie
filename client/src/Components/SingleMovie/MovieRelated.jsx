import React from 'react'
import Title from "../Title";
import { MdMovie } from "react-icons/md";
import Movie from '../Movie';
const MovieData = [
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
    }
  ];
const MovieRelated = () => {
  return (
    <div className='my-16'>
        <Title title="Ralated Movies" Icon={MdMovie}></Title>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
           {MovieData.map((movie,index) => (
            <Movie key={index} movie={movie}></Movie>
           ))}
        </div>
    </div>
  )
}

export default MovieRelated