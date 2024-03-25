import React from 'react';

export default async function Page({ params }) {
    const actorID = params.id;
    try {
        // Fetch actor details
        const res = await fetch(`https://api.themoviedb.org/3/person/${actorID}?api_key=729adca28d6a4301ad60d0d49fbaddde`);

        // Check if the response is successful
        if (!res.ok) {
            throw new Error('Failed to fetch actor data');
        }

        // Parse the response
        const actor = await res.json();
        console.log(actor);

        // Render actor details
        return (
            <div className='w-full'>
                <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                        alt={actor.name}
                        width={300}
                        height={300}
                        className='rounded-lg'
                        style={{maxWidth: '100%' , height: '100%'}}
                    />
                    <div className='p-2'>
                        <h2 className='text-lg mb-3 font-bold'>{actor.name}</h2>
                        <p className='text-lg mb-3'>{actor.biography}</p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Birthday:</span>{actor.birthday}</p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>Known For:</span>{actor.known_for_department}</p>
                        <p className='mb-3'>
                            <span className='font-semibold mr-1'>IMDb ID:</span><a href={`https://www.imdb.com/name/${actor.imdb_id}`} target="_blank" rel="noreferrer">{actor.imdb_id}</a></p>
                        {actor.homepage && <p className='mb-3'><span className='font-semibold mr-1'>Homepage:</span> <a href={actor.homepage} target="_blank" rel="noreferrer">{actor.homepage}</a></p>}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching actor data:', error);
        return <div>Error: Failed to fetch actor data</div>;
    }
}
