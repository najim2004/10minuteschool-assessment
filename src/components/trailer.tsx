"use client";

import { Media } from "@/types";
import Image from "next/image";
import React, { useState, useRef, useEffect, JSX } from "react";

interface TrailerProps {
  mediaItems: Media[];
}

const MAIN_PLAYER_WIDTH = 867;
const MAIN_PLAYER_HEIGHT = 480;
const PAGINATION_THUMB_WIDTH = 55;
const PAGINATION_THUMB_HEIGHT = 33;

function Trailer({ mediaItems }: TrailerProps): JSX.Element | null {
  const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const paginationRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (paginationRef.current && thumbnailRefs.current[currentMediaIndex]) {
      thumbnailRefs.current[currentMediaIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentMediaIndex]);

  if (!mediaItems || mediaItems.length === 0) {
    return null;
  }

  const currentMedia = mediaItems[currentMediaIndex];

  const handleThumbnailClick = (index: number) => {
    setCurrentMediaIndex(index);
    setIsPlaying(false);
  };

  const handleMainPlayClick = () => {
    if (currentMedia.resource_type === "video") {
      setIsPlaying(true);
    }
  };

  const goToPrevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  return (
    <>
      {/* Main Player */}
      <div className="relative overflow-hidden bg-black youtube-video aspect-video">
        <div className="relative w-full h-full">
          {currentMedia.resource_type === "video" && !isPlaying && (
            <>
              <div className="absolute inset-0 bg-black opacity-40 z-[1]" />
              <span
                className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleMainPlayClick}
              >
                {/* Play button SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="none"
                  viewBox="0 0 56 56"
                >
                  <circle
                    cx="28"
                    cy="28"
                    r="28"
                    fill="#fff"
                    fillOpacity="0.5"
                  />
                  <circle cx="28" cy="28" r="25.415" fill="#fff" />
                  <path
                    fill="#1CAB55"
                    d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                  />
                </svg>
              </span>
            </>
          )}

          <div className="thumb-wrap w-full h-full">
            {currentMedia.resource_type === "video" && isPlaying ? (
              <iframe
                className="w-full h-full absolute inset-0"
                src={`https://www.youtube.com/embed/${currentMedia.resource_value}?autoplay=1&rel=0`}
                title={currentMedia.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="w-full h-full transition-opacity duration-300 ease-in-out"
                style={{ opacity: 1 }}
              >
                <Image
                  alt={currentMedia.name}
                  src={
                    currentMedia.resource_type === "video"
                      ? currentMedia.thumbnail_url ||
                        `https://img.youtube.com/vi/${currentMedia.resource_value}/hqdefault.jpg`
                      : currentMedia.resource_value
                  }
                  width={MAIN_PLAYER_WIDTH}
                  height={MAIN_PLAYER_HEIGHT}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Arrows */}
        {mediaItems.length > 1 && (
          <>
            <div
              className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
              onClick={goToPrevMedia}
            >
              {/* Left arrow */}
              <svg
                viewBox="0 0 512 512"
                fill="white"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
              </svg>
            </div>
            <div
              className="absolute right-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
              onClick={goToNextMedia}
            >
              {/* Right arrow */}
              <svg
                viewBox="0 0 512 512"
                fill="white"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div
        className="flex gap-4 p-4 overflow-x-auto hideScrollbar"
        ref={paginationRef}
      >
        {mediaItems.map((item, index) => (
          <div
            key={`${item.resource_value}-${index}`}
            ref={(el) => {
              thumbnailRefs.current[index] = el;
            }}
          >
            <div
              className={`relative rounded cursor-pointer overflow-hidden outline-[2px] ${
                index === currentMediaIndex
                  ? "outline-[#1CAB55]"
                  : "border border-gray-300 outline-white"
              }`}
              style={{
                width: PAGINATION_THUMB_WIDTH,
                height: PAGINATION_THUMB_HEIGHT,
                flexShrink: 0,
              }}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                alt={item.name}
                src={
                  item.resource_type === "video"
                    ? item.thumbnail_url ||
                      `https://img.youtube.com/vi/${item.resource_value}/default.jpg`
                    : item.resource_value
                }
                width={PAGINATION_THUMB_WIDTH}
                height={PAGINATION_THUMB_HEIGHT}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {item.resource_type === "video" && (
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <Image
                    alt="Play The Video"
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Trailer;
