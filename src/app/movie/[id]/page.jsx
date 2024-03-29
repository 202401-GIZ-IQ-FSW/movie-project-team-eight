import Companies from "@/components/Companies";
import MovieCast from "@/components/MovieCast";
import Overview from "@/components/Overview";
import SectionSlider from "@/components/Sections/MovieSectionSlider";
import Trailer from "@/components/Trailer";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=729adca28d6a4301ad60d0d49fbaddde`
  );
  const movie = await response.json();

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=729adca28d6a4301ad60d0d49fbaddde`
  );
  const credits = await res.json();
  const direrctor = credits.crew.map((crewMember) => {
    if (crewMember.job === "Director") {
      return crewMember.name;
    }
  });
  const cast = credits.cast.slice(0, 5);

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=729adca28d6a4301ad60d0d49fbaddde`
  );
  const videos = await result.json();
  const keyArray = videos.results.filter((video) =>
    video.name.includes("Trailer")
  );
  const videoKey = keyArray.length > 0 ? keyArray[0].key : null;

  return (
    <div className="mt-16 w-full">
      <div className="p-4 sm:pt-8 flex flex-col lg:flex-row content-center max-w-6xl mx-auto sm:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          width={500}
          height={300}
          className="rounded-lg max-w-full h-full self-center lg:self-start"
        />
        <div className="p-2">
          <div className="flex flex-col justify-between mb-4">
            <h2 className="text-2xl mb-2 font-bold text-red-700">
              {movie.original_title}
            </h2>
            <p className="text-gray-400 text-sm flex items-center gap-2 ">
              <span className="flex gap-1 items-center">
                <FaStar className=" text-amber-500" /> {movie.vote_average}
              </span>
              |
              <span>
                {movie.release_date.slice(0, 4) ||
                  movie.first_air_date.slice(0, 4)}
              </span>
              |<span>{movie.runtime}min</span>|
              <span className="flex gap-1 items-center">
                <IoLanguageSharp /> {movie.original_language}
              </span>
            </p>
          </div>
          <p className="text-md mb-3">
            <Overview overview={movie.overview} />
          </p>
          <p className="mb-3">
            <b>Director:</b> {direrctor}
          </p>
          <div className="flex flex-col gap-3 mb-3">
            <b className="text-red-700">Actors:</b>
            <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <MovieCast cast={cast} />
            </div>
          </div>
          <div className=" h-80 mb-4 flex flex-col gap-3">
            <b className="text-red-700">Trailer:</b>
            {videoKey ? (
              <Trailer videoKey={videoKey} />
            ) : (
              <p>No Trailer Available</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <b className="text-red-700">Producers:</b>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full">
              <Companies companies={movie.production_companies} />
            </div>
          </div>
        </div>
      </div>
      <SectionSlider
        title="Similar Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=729adca28d6a4301ad60d0d49fbaddde`}
      />
    </div>
  );
}
