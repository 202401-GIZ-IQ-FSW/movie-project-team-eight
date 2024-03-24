"use client";
import YouTube from "react-youtube";

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};
export default function Trailer({ key }) {
  return <YouTube videoId={`${key}`} opts={opts} />;
}
