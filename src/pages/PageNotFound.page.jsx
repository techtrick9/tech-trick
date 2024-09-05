import { Button } from "@nextui-org/button";
import pageNotFound from "../assets/pageNotFound.svg";
import { Link } from "react-router-dom";
const PageNotFoundPage = () => {
  return (
    <div className="w-full h-[93vh] flex justify-center items-center flex-col gap-5">
      <img src={pageNotFound} alt="page not found" className="max-w-[500px]" />
      <h1 className="text-3xl font-noto-sans-myanmar font-semibold text-center">
        Page Not Found
      </h1>
      <Button className="bg-[#6C63FF] text-white font-noto-sans-myanmar font-semibold">
        <Link to={"/"}>ပင်မ စာမျက်နှာ သို့</Link>
      </Button>
    </div>
  );
};

export default PageNotFoundPage;
