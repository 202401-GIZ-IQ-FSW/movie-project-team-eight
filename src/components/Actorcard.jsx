"use client";
import Image from "next/image";
import "./Sections/SectionSlider.css";

export default function MovieCard({ actors }) {
  return (
    <>
      {actors.map((actor) => (
        <div key={actor.id} className="slider-item ">
          <Image
            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            width={200}
            height={300}
            className=" object-cover rounded-md"
          />
          <div className="slider-overlay">
            <p className="movie-title">{actor.name}</p>
            <a href={`/actor/${actor.id}`} className="play-now-btn">
              Details
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
