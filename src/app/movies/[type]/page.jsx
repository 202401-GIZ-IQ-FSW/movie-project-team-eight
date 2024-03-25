import MovieCard from "@/components/MovieCard";

export default async function MoviesPage({ params }) {
  const type = params.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=729adca28d6a4301ad60d0d49fbaddde&language=en-US&page=1`
  );
  const movies = await response.json();
  return (
    <div className="mt-16 w-full">
      <div className="grid grid-cols-3 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4">
        <MovieCard movies={movies.results} />
      </div>
    </div>
  );
}
