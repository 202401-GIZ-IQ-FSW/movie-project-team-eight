import MovieCard from "@/components/MovieCard";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=729adca28d6a4301ad60d0d49fbaddde`
  );
  const movies = await response.json();
  return (
    <div>
      <div className="mt-16 w-full">
        <div className="grid grid-cols-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4">
          <MovieCard movies={movies.results} />
        </div>
      </div>
    </div>
  );
}
