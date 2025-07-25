import Image from "next/image";
import React from "react";

function Trailer() {
  return (
    <>
      {/* slider */}
      <div className="relative overflow-hidden bg-black youtube-video aspect-video">
        <div className="relative">
          <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
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
              ></circle>
              <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
              <path
                fill="#1CAB55"
                d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
              ></path>
            </svg>
          </span>
          <div className="thumb-wrap">
            <div>
              <div
                className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                style={{
                  fontSize: "0px",
                  objectFit: "cover",
                  opacity: 1,
                }}
              >
                <Image
                  alt="IELTS Course by Munzereen Shahid"
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  width={867}
                  height={480}
                  priority
                  className="w-full"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            color="white"
            style={{ color: "white" }}
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
          </svg>
        </div>
        <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            color="white"
            style={{ color: "white" }}
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
          </svg>
        </div>
      </div>
      {/* slider pagination */}
      <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
        <div>
          <div>
            <div className="relative w-[55px] rounded cursor-pointer overflow-hidden outline-[2px] outline-[#1CAB55]">
              <div
                className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="preview_gallery"
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  width={86}
                  height={50}
                  style={{ color: "transparent" }}
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: "0px", opacity: 1 }}
                >
                  <Image
                    alt="Play The Video"
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    width={20}
                    height={20}
                    priority
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative w-[55px] rounded cursor-pointer border-0">
              <div
                className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="preview_gallery"
                  src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
                  width={86}
                  height={50}
                  style={{ color: "transparent" }}
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative w-[55px] rounded cursor-pointer border-0">
              <div
                className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="preview_gallery"
                  src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png"
                  width={86}
                  height={50}
                  style={{ color: "transparent" }}
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative w-[55px] rounded cursor-pointer border-0">
              <div
                className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="preview_gallery"
                  src="https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
                  width={86}
                  height={50}
                  style={{ color: "transparent" }}
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: "0px", opacity: 1 }}
                >
                  <Image
                    alt="Play The Video"
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    width={20}
                    height={20}
                    priority
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative w-[55px] rounded cursor-pointer border-0">
              <div
                className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="preview_gallery"
                  src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
                  width={86}
                  height={50}
                  style={{ color: "transparent" }}
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: "0px", opacity: 1 }}
                >
                  <Image
                    alt="Play The Video"
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    width={20}
                    height={20}
                    priority
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative w-[55px] rounded cursor-pointer border-0">
              <div
                className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <Image
                  alt="preview_gallery"
                  src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
                  width={86}
                  height={50}
                  style={{ color: "transparent" }}
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: "0px", opacity: 1 }}
                >
                  <Image
                    alt="Play The Video"
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    width={20}
                    height={20}
                    priority
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trailer;
