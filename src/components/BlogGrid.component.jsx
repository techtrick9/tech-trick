import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { useState } from "react";

const BlogGridComponent = ({ blogs, category }) => {
  const [showBlogs, setShowBlogs] = useState(blogs);

  useEffect(() => {
    if (!category == "0") {
      const filteredBlogs = blogs.filter((blog) => blog.value === category);
      setShowBlogs(filteredBlogs);
    }
    if (category == "0") {
      setShowBlogs(blogs);
    }
  }, [category, blogs]);

  const nav = useNavigate();
  const badgeColor = (type) => {
    if (type === "canva") {
      return "bg-[#5B48E8] text-white";
    }
    if (type === "youtube") {
      return "bg-[#FF0000] text-white";
    }
  };

  return (
    <div className="mx-auto px-4">
      <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 w-fit sm:w-auto md:grid-cols-3 lg:grid-cols-4 gap-6">
        {showBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.alt}
              className="w-full max-w-[400px] text-medium text-center mx-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 flex justify-between items-center font-noto-sans-myanmar">
                {blog.title}{" "}
                <span
                  className={`${badgeColor(
                    blog.category
                  )} text-sm rounded-full px-2 flex items-center`}
                >
                  {blog.category}
                </span>{" "}
              </h3>
              <p className=" text-sm mb-2 text-black font-semibold font-noto-sans-myanmar">
                {new Date(blog.date).toLocaleDateString("en-US")}
              </p>
              <p className="text-black text-medium font-semibold font-noto-sans-myanmar">
                {blog.description}
              </p>
              <Button
                className={
                  "ms-auto block font-noto-sans-myanmar mt-4 font-semibold" +
                  " " +
                  badgeColor(blog.category)
                }
                color="primary"
                onClick={() => nav("/" + blog.category + "/" + blog.slug)}
              >
                ကြည့်မယ်
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGridComponent;
