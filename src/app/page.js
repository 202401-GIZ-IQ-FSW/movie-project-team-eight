// Inside your Home.js or wherever your main component is
import React from 'react';
import Navbar from '../components/Navbar'; 
import HeroSection from "../components/HeroSection/HeroSection";
import SectionSlider from '../components/Sections/SectionSlider'; 

const Home = () => {
  const apiKey = "729adca28d6a4301ad60d0d49fbaddde";

  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionSlider 
        title="Popular Movies" 
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`} 
      />
      <SectionSlider 
        title="Top Rated Movies" 
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`} 
      />
      <SectionSlider 
        title="Upcoming Movies" 
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`} 
      />
      <SectionSlider 
        title="Now Playing" 
        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`} 
      />
      <SectionSlider 
        title="Popular Actors" 
        fetchUrl={`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`} 
      />
    </>
  );
};

export default Home;
