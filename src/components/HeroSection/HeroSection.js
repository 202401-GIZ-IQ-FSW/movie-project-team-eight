"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./HeroSection.css";
import Link from "next/link";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=729adca28d6a4301ad60d0d49fbaddde&language=en-US&page=1`
        );
        setMovies(response.data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching latest movies:", error);
      }
    };

    fetchLatestMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative h-96 md:h-[500px] lg:h-[500px] overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-10 md:bottom-20 left-0 p-4 md:p-8 w-full">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                {movie.title}
              </h2>
              <p className="text-white text-md md:text-md mb-8 md:mb-4 max-w-xs md:max-w-sm">
                {movie.overview}
              </p>
              <div className="flex space-x-4">
                <button className="text-black bg-white hover:bg-gray-300 font-bold py-2 px-6 rounded flex items-center transition-all duration-150 ease-in-out">
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-3.196m0 0L9.75 8.525M11.555 14.753l3.196 3.197m0 0l1.806 1.805m-1.806-1.805L8.547 11.11m6.004 3.643l-3.196-3.197m0 0l-1.806-1.805m1.806 1.805L14.752 14.753z"
                    />
                  </svg>
                  Play Now
                </button>
                <Link
                  href={`/movie/${movie.id}`}
                  className="text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-70 font-bold py-2 px-6 rounded flex items-center transition-all duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-7a9 9 0 00-9 9h18a9 9 0 00-9-9z"
                    />
                  </svg>
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
