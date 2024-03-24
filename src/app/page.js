"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import HeroSection from "../components/HeroSection/HeroSection";
import SectionSlider from '../components/Sections/SectionSlider'; 
import Footer from '@/components/Footer';
import Loader from '../components/Loader/Loader';

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
      {/* <SectionSlider 
        title="Popular Actors" 
        fetchUrl={`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`} 
      /> */}

<SectionSlider
  title="Popular Actors"
  fetchUrl={`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`}
  extraClass="actors-section"
/>

      <Footer />
    </>
  );
};

export default Home;
