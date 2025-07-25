import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div style={{ display: "block" }}>
      <div className="max-w-[1200px] mx-auto mb-24 md:mb-0">
        <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start lg:mb-7 lg:mr-6">
            <Link className="mb-4" href="/">
              <div
                className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", objectFit: "contain", opacity: 1 }}
              >
                <Image
                  alt="Instructor"
                  loading="lazy"
                  width={116}
                  height={32}
                  style={{ color: "transparent" }}
                  src="https://10minuteschool.com/images/logo.svg"
                />
              </div>
            </Link>
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              Download Our Mobile App
            </h3>
            <div className="flex">
              <div className="mr-4">
                <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                  <div
                    className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="google play"
                      loading="lazy"
                      width={156}
                      height={49}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                  <div
                    className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="ios download"
                      loading="lazy"
                      width={156}
                      height={49}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none lg:mx-0 lg:border-b lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Company
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a
                      href="https://app.10minuteschool.com/careers"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Career / Recruitment
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Join as a Teacher
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://affiliation.10minuteschool.com/"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Join as an Affiliate
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.10minuteschool.com/privacy-policy"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.10minuteschool.com/refund-policy"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Refund policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.10minuteschool.com/terms-and-conditions"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Others
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a
                      href="https://blog.10minuteschool.com/"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/store/all"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Book Store
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://10minuteschool.com/content"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Free Notes & Guides
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/jobs-prep"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Job Preparation Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/certificate"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Verify Certificate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resource"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Free Download
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Keep up with us at
              </h3>
              <p className="mb-4 text-base font-normal">
                Call Us:{" "}
                <span>
                  <a className="text-green" href="tel:16910">
                    16910
                  </a>{" "}
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                whatsapp:{" "}
                <span>
                  <a
                    className="text-green"
                    href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance"
                  >
                    +8801896016252
                  </a>
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                Outside Bangladesh:{" "}
                <span>
                  <a className="text-green" href="tel:+8809610916910">
                    +880 9610916910
                  </a>
                </span>
              </p>
              <p className="mb-2 text-base font-normal">
                Email Us:{" "}
                <span className="text-green">support@10minuteschool.com</span>
              </p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              <div>
                <a
                  href="https://www.facebook.com/10minuteschool/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="facebook"
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/10ms_insta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="instagram"
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/10ms/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="linkedin"
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="youtube"
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.tiktok.com/@10minuteschool?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <Image
                      alt="Tiktok"
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
