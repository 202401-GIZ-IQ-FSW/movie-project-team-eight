"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  SearchIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const moviesOptions = [
    { name: "Top Rated", key: "top_rated" },
    { name: "Popular", key: "popular" },
    { name: "Now Playing", key: "now_playing" },
    { name: "Upcoming", key: "upcoming" },
  ];

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              api_key: "729adca28d6a4301ad60d0d49fbaddde",
              language: "en-US",
            },
          }
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <header className="bg-black bg-opacity-80 py-3 px-6 sm:px-10 font-sans-serif shadow-lg fixed w-full z-50 top-0 transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-red-600 text-xl font-bold">
          CatFlix
        </Link>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="relative flex items-center lg:ml-auto lg:order-1">
          <SearchIcon className="w-5 h-5 text-gray-300 absolute ml-2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-2 bg-transparent border-2 border-gray-300 text-sm w-32 md:w-64 lg:w-auto text-gray-300 rounded-full h-9 outline-none mx-auto"
          />
        </div>

        <ul
          className={`lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col lg:flex-row lg:space-x-8`}
        >
          <li>
            <Link
              href="/"
              className="font-bold text-gray-300 hover:text-red-600 text-15px flex items-center"
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-gray-300 hover:text-red-600 text-15px flex items-center"
            >
              Genres <ChevronDownIcon className="w-4 h-4 ml-2" />
            </a>
            <div className="dropdown absolute left-0 hidden group-hover:block bg-gray-700 z-20 overflow-y-auto max-h-48">
              {genres.map((genre) => (
                <a
                  key={genre.id}
                  href={`/genres/${genre.id}`}
                  className="text-white block px-4 py-2 text-sm hover:bg-red-600"
                >
                  {genre.name}
                </a>
              ))}
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-gray-300 hover:text-red-600 text-15px flex items-center"
            >
              Movies <ChevronDownIcon className="w-4 h-4 ml-2" />
            </a>
            <div className="dropdown absolute left-0 hidden group-hover:block bg-gray-700 z-20">
              {moviesOptions.map((option, index) => (
                <a
                  key={index}
                  href={`/movies/${option.key}`}
                  className="text-white block px-4 py-2 text-sm hover:bg-red-600"
                >
                  {option.name}
                </a>
              ))}
            </div>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-red-600 text-15px flex items-center"
            >
              Actors
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
