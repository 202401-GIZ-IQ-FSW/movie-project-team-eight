"use client";
import YouTube from "react-youtube";

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};
export default function Trailer({ videoKey }) {
  return <YouTube videoId={videoKey} opts={opts} />;
}
