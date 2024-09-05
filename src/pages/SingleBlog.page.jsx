import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../assets/favicon.png";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube, BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blog.json";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import Video.js CSS

const SingleBlogPage = () => {
  const { slug } = useParams();
  const post = blogs.find((blog) => blog.slug === slug);
  const videoRefs = useRef([]);
  const nav = useNavigate();

  useEffect(() => {
    if (!post) {
      nav("*");
    }
    // Initialize Video.js for each video
    videoRefs.current.forEach((video) => {
      if (video) {
        videojs(video, {
          controls: true,
          autoplay: false,
          preload: "auto",
          responsive: true,
          fluid: true,
        });
      }
    });

    // Cleanup
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          const player = videojs(video);
          player.dispose();
        }
      });
    };
  }, [post, nav]);

  return (
    post && (
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
            <div className="mt-10 max-w-full" key={index}>
              <h1 className="text-3xl font-noto-sans-myanmar font-semibold text-center mb-3">
                အပိုင်း {index + 1}
              </h1>
              <div className="w-full">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="video-js vjs-default-skin max-w-full"
                  controls
                  preload="auto"
                  data-setup="{}"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
          <p className="mt-10 text-lg md:text-xl leading-9 font-noto-sans-myanmar font-semibold text-center">
            {post.iWantToSay}
          </p>
          <div className="flex flex-col gap-4 items-center my-8 md:flex-row">
            <p className="text-xl leading-9 font-noto-sans-myanmar font-semibold">
              Comment မန့်ရန်
            </p>
            <div className="flex gap-5 md:gap-7 md:ms-[25px]">
              <Link target="_blank" to={post.tiktok}>
                <FaTiktok className="w-[38px] h-[38px]" />
              </Link>
              <Link target="_blank" to={post.youtube}>
                <BsYoutube className="w-[38px] h-[38px]" />
              </Link>
              <Link target="_blank" to={post.facebook}>
                <BsFacebook className="w-[38px] h-[38px]" />
              </Link>
              <Link target="_blank" to={post.telegram}>
                <FaTelegram className="w-[38px] h-[38px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SingleBlogPage;
