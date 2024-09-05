import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../assets/favicon.png";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { useParams } from "react-router-dom";
import blogs from "../data/blog.json";
import Plyr from "plyr"; // Import Plyr

const SingleBlogPage = () => {
  const { slug } = useParams();
  const post = blogs.find((blog) => blog.slug === slug);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Initialize Plyr for each video
    videoRefs.current.forEach((video) => {
      if (video) {
        new Plyr(video, {
          controls: ["play", "progress", "volume", "fullscreen", "settings"],
          settings: ["quality", "speed"],
          // Disable Picture-in-Picture
          pip: false,
        });
      }
    });
  }, []);

  return (
    <div className="h-full relative py-5 px-3">
      <div className="flex items-center">
        <div className="flex gap-4 items-center font-mono">
          <Link to="/">
            <img className="w-[70px]" src={img} alt="Tech Trick" />
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
            <Link to="/">Tech Trick</Link>
          </h1>
        </div>
      </div>
      <div className="fixed bottom-3 end-3 rounded-lg items-center z-10">
        <div className="flex gap-7 md:gap-10 custom-border">
          <Link target="_blank" to="https://bit.ly/4cUxHvs">
            <FaTiktok className="w-[38px] h-[38px]" />
          </Link>
          <Link target="_blank" to="https://bit.ly/4gauJWs">
            <BsYoutube className="w-[38px] h-[38px]" />
          </Link>
          <Link target="_blank" to="https://bit.ly/3Xk9U2m">
            <BsFacebook className="w-[38px] h-[38px]" />
          </Link>
          <Link target="_blank" to="https://bit.ly/3X9XrOx">
            <FaTelegram className="w-[38px] h-[38px]" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-4 max-w-[1000px] mx-auto my-5">
        <Breadcrumbs size="sm">
          <BreadcrumbItem>
            <Link to="/">
              <span className="font-noto-sans-myanmar text-black font-semibold text-[13px]">
                ပင်မ စာမျက်နှာ သို့
              </span>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span className="font-noto-sans-myanmar text-black font-semibold text-[13px]">
              {post.title}
            </span>
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="max-w-[900px] mx-auto mb-20">
        <h1 className="text-3xl font-noto-sans-myanmar font-semibold text-center">
          {post.title}
        </h1>
        {post.videos.map((video, index) => (
          <div className="mt-10" key={index}>
            <h1 className="text-3xl font-noto-sans-myanmar font-semibold text-center mb-3">
              {" "}
              အပိုင်း {index + 1}
            </h1>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="block mx-auto"
              controls
              controlsList="nodownload noremoteplayback"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
        <p className="mt-10 text-lg md:text-xl leading-9 font-noto-sans-myanmar font-semibold text-center">
          {post.iWantToSay}
        </p>
        <div className="flex flex-col gap-4  items-center my-8 md:flex-row">
          <p className=" text-xl leading-9 font-noto-sans-myanmar font-semibold">
            Comment မန့်ရန်
          </p>
          <div className="flex gap-5 md:gap-7 md:ms-[25px]">
            <Link target="_blank" to="https://bit.ly/4cUxHvs">
              <FaTiktok className="w-[38px] h-[38px]" />
            </Link>
            <Link target="_blank" to="https://bit.ly/4gauJWs">
              <BsYoutube className="w-[38px] h-[38px]" />
            </Link>
            <Link target="_blank" to="https://bit.ly/3Xk9U2m">
              <BsFacebook className="w-[38px] h-[38px]" />
            </Link>
            <Link target="_blank" to="https://bit.ly/3X9XrOx">
              <FaTelegram className="w-[38px] h-[38px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
