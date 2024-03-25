"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Loader from "../components/Loader/Loader";
import ActorSectionSlider from "@/components/Sections/ActorSectionSlider";
import MovieSectionSlider from "../components/Sections/MovieSectionSlider";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = "729adca28d6a4301ad60d0d49fbaddde";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <HeroSection />
      <MovieSectionSlider
        title="Popular Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MovieSectionSlider
        title="Top Rated Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MovieSectionSlider
        title="Upcoming Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`}
      />
      <MovieSectionSlider
        title="Now Playing"
        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`}
      />
      {/* <SectionSlider 
        title="Popular Actors" 
        fetchUrl={`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`} 
      /> */}

      <ActorSectionSlider
        title="Popular Actors"
        fetchUrl={`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKey}&language=en-US&page=1`}
        extraClass="actors-section"
      />
    </>
  );
};

export default Home;
