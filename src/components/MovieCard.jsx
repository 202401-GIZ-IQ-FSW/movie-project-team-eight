"use client";
import Image from "next/image";
import "./Sections/SectionSlider.css";

export default function MovieCard({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="slider-item ">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={200}
            height={300}
            className=" object-cover rounded-md"
          />
          <div className="slider-overlay">
            <p className="movie-title">{movie.title}</p>
            <a href={`/movie/${movie.id}`} className="play-now-btn">
              Details
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
