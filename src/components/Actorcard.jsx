"use client";
import Image from "next/image";
import "./Sections/SectionSlider.css";
import Link from "next/link";

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
            alt="Actor profile picture"
          />
          <div className="slider-overlay">
            <p className="movie-title">{actor.name}</p>
            <Link href={`/actor/${actor.id}`} className="play-now-btn">
              Details
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
