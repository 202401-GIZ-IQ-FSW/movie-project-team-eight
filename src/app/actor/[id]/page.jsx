"use client";
import Overview from "@/components/Overview";

export default async function Page({ params }) {
  const actorID = params.id;
  // Fetch actor details
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}?api_key=729adca28d6a4301ad60d0d49fbaddde`
  );

  // Check if the response is successful
  if (!res.ok) {
    throw new Error("Failed to fetch actor data");
  }
  // Parse the response
  const actor = await res.json();

  // Render actor details
  return (
    <div className="w-full mt-5">
      <div className="p-4 md:pt-8 mt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <img
          src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
          alt={actor.name}
          width={300}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-2xl mb-3 font-bold text-red-700">{actor.name}</h2>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-red-700">
              Also Known As:
            </span>
            {actor.also_known_as.join(", ")}
          </p>
          <div className=" text-lg mb-3">
            <Overview overview={actor.biography} />
          </div>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-red-700">Birthday:</span>
            {actor.birthday}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-red-700">
              Place of Birth:
            </span>
            {actor.place_of_birth}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-red-700">Gender:</span>
            {actor.gender === 1 ? "Female" : "Male"}
          </p>

          <p className="mb-3">
            <span className="font-semibold mr-1 text-red-700">Known For:</span>
            {actor.known_for_department}
          </p>
        </div>
      </div>
    </div>
  );
}
