import Image from "next/image";

export default function MovieCast({ cast }) {
  return (
    <>
      {cast.map((actor) => (
        <div key={actor.id} className="flex flex-col items-center ">
          <Image
            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            width={50}
            height={50}
            className="rounded-full h-16 w-16 object-cover"
          />
          <span className=" font-light text-center">{actor.original_name}</span>
        </div>
      ))}
    </>
  );
}
