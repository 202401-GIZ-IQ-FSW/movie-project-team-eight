
import Actorcard from "@/components/Actorcard";
export default async function page() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=729adca28d6a4301ad60d0d49fbaddde&language=en-US&page=1`);
    if (!res.ok) {
        throw new Error('Failed to fetch actor data');
    }

    // Parse the response
    const actors = await res.json();
    console.log(actors);
  return (
    <div className="mt-16 w-full">
      <div className="grid grid-cols-3 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4">
        <Actorcard actors={actors.results} />
      </div>
    </div>
      
    
  )
} 

