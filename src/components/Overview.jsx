"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Overview({ overview }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);
  return (
    <>
      <p className={isOpen ? "" : "line-clamp-2"} ref={ref}>
        {overview}
      </p>

      {showReadMore && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline text-red-600"
        >
          {isOpen ? "Read less..." : "Read more..."}
        </button>
      )}
    </>
  );
}
