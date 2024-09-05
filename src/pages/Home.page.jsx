import { Select, SelectItem } from "@nextui-org/select";
import categories from "../data/category.json";
import { Link } from "react-router-dom";
import img from "../assets/favicon.png";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { BlogGridComponent } from "../components";
import { useState } from "react";
import blogs from "../data/blog.json";

const HomePage = () => {
  const [category, setCategory] = useState(null);
  const handleSelectChange = (obj) => {
    const value = obj.target.value;
    setCategory(value);
  };
  return (
    <div className="h-full relative py-5 px-3">
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
      <div className="max-w-[400px] mx-auto my-10 fixed start-0 end-0 top-[55px] w-full px-3">
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
      <div className="fixed bottom-3 end-3 rounded-lg items-center bg-[#DFDFDF] z-10">
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
      <div className="w-fit mx-auto mt-[100px]">
        <BlogGridComponent blogs={blogs} category={category} />
      </div>
    </div>
  );
};

export default HomePage;
