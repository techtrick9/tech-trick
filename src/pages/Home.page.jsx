import { Select, SelectItem } from "@nextui-org/select";
import categories from "../data/category.json";
import { Link } from "react-router-dom";
import img from "../assets/favicon.png";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { IoArrowUpCircle } from "react-icons/io5";

import { BlogGridComponent } from "../components";
import { useState } from "react";
import blogs from "../data/blog.json";
import GoogleAd from "../ads/GoogleAd";
import AdUnit from "../ads/AdUnit";

const HomePage = () => {
  const [category, setCategory] = useState(null);
  const handleSelectChange = (obj) => {
    const value = obj.target.value;
    setCategory(value);
  };
  return (
    <div id="select" className="h-full relative py-5 px-3">
      <GoogleAd />
      <div className="flex items-center">
        <div className=" flex gap-4 items-center font-mono">
          <Link to="/">
            <img className="w-[70px]" src={img} alt="Tech Trick" />
          </Link>
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
            <Link to="/">Tech Trick</Link>
          </h1>
        </div>
      </div>
      <div className="max-w-[400px] mx-auto my-5 w-full px-3">
        <Select
          label="အမျိုးအစားများ"
          className="max-w-full"
          onChange={handleSelectChange}
        >
          {categories.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item === "အားလုံး" ? item + "" : item + "အကြောင်း"}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="fixed bottom-[60px] md:bottom-3 start-3 end-3 flex justify-center  rounded-lg items-center z-10">
        <a href="#select" className="flex gap-7 md:gap-10">
          <IoArrowUpCircle
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-[38px] h-[38px] cursor-pointer animate-bounce"
          />
        </a>
      </div>
      <div className="fixed bottom-3 end-3 rounded-lg items-center bg-[#DFDFDF] z-10">
        <div className="flex gap-7 md:gap-10">
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
      <div className="w-fit mx-auto mt-10 mb-40">
        <BlogGridComponent blogs={blogs} category={category} />
      </div>
    </div>
  );
};

export default HomePage;
