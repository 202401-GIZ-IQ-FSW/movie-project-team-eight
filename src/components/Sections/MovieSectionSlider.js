"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./SectionSlider.css";
import Link from "next/link";

const MovieSectionSlider = ({ title, fetchUrl, extraClass }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setItems(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const isActorsSection = extraClass === "actors-section";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: isActorsSection,

    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };

  //   return (
  //     <div className="section">
  //       <h2 className="section-title">{title}</h2>
  //       <Slider {...settings}>
  //         {items.map(item => (
  //           <div key={item.id} className="slider-item">
  //             <img src={`https://image.tmdb.org/t/p/w300${item.poster_path || item.profile_path}`} alt={item.title || item.name} />
  //             <div className="slider-overlay">
  //               <p className="movie-title">{item.title || item.name}</p>
  //               <button className="play-now-btn">Details</button>
  //             </div>
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //   );
  // };

  return (
    <div className={`section ${extraClass}`}>
      <h2 className="section-title">{title}</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="slider-item hover:cursor-grab active:cursor-grabbing"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title}
            />
            <div className="slider-overlay">
              <p className="movie-title">{item.title}</p>
              <Link href={`/movie/${item.id}`} className="play-now-btn">
                Details
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSectionSlider;
