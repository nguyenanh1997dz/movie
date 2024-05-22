import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { likeMovieFunc } from "../Context/likeMoviesFunction";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.likeMovie);
  const { userInfo } = useSelector((state) => state.userLogin);
  const handleLikeClick = () => {
    likeMovieFunc(movie?._id, userInfo, dispatch);
  };

  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <Link to={`/movie/${movie?._id}`} className="w-full">
        <img
          src={movie?.image}
          alt={movie?.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
        <h3 className="font-semibold truncate">{movie?.name}</h3>

        <button
          disabled={isLoading}
          onClick={handleLikeClick}
          className={`h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain  bg-subMain text-white rounded-md`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default Movie;
