"use client";
import SearchIcon from "@heroicons/react/solid";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  return (
    <form className="relative flex items-center lg:ml-auto lg:order-1">
      <SearchIcon className="w-5 h-5 text-gray-300 absolute ml-2 pointer-events-none" />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 pr-2 bg-transparent border-2 border-gray-300 text-sm w-32 md:w-64 lg:w-auto text-gray-300 rounded-full h-9 outline-none mx-auto"
      />
    </form>
  );
}
