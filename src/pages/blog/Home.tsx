import { useEffect, useState } from "react";
import type { BlogDataType } from "../../types/type/global.type";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import type { MessageInterface } from "../../types/interface/global.interface";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // console.log("err message", error);

  const [blog, setblog] = useState<BlogDataType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    // setLoading(true);
    
    // const handelBlog = () => {

      axios
        .get("https://dummyjson.com/posts")
        .then((response) => {
          // console.log("res", response.data);
          setblog(response.data.posts);
        })
        .catch((error) => {
          // console.log("err message", error.message);
          setError(error.message);
        })
        .finally(() => setLoading(false));
    // };

    // handelBlog();

    // const handelBlog = async () => {

    //   setLoading(true);

    //   // if(!blog) return;

    //   // use axios for fetching data

    //   try {
    //     const response = await fetch("https://dummyjson.com/posts");

    //     // console.log("res", response);

    //     const data = await response.json();

    //     // console.log("jsonData", data.posts);

    //     setblog(data.posts);
    //   } catch (error) {
    //     // console.log("err message", error);
    //     setError(error || "There is some problems");
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // handelBlog();
  }, []);
  return (
    <div className="h-[90vh] w-full p-5">
      <h2 className=" font-bold text-2xl text-center">Blog Posts</h2>
      <div className=" mt-2 p-5 flex flex-wrap gap-4 justify-center">
        {loading && (
          <p className=" text-red-500 text-xl text-center">Loading...</p>
        )}

        {error && <p className=" text-red-500 text-xl text-center">{error}</p>}

        {blog?.map((itm) => (
          <div
            key={itm?.id}
            className=" border border-gray-300 p-5  rounded-md w-[460px] flex flex-col items-start justify-between shadow-xl "
          >
            <div>
              <h3 className=" font-bold text-xl mb-2">
                Title: <span className="font-normal">{itm?.title}</span>
              </h3>
              <p className=" font-bold">
                Body: <span className="font-normal">{itm?.body}</span>
              </p>
            </div>

            <div className=" w-full flex items-center justify-between">
              <button
                onClick={() => navigate(`/blogapp/${itm?.id}`)}
                className="mt-3 px-3 py-2 bg-blue-400 rounded-md hover:bg-blue-500 hover:text-gray-100 hover:scale-105  transition-all duration-300"
              >
                View Details
              </button>

              {/* <button
                onClick={() => navigate(`author/${itm?.id}`)}
                className="mt-3 px-3 py-2 bg-green-400 rounded-md hover:bg-green-500 hover:text-gray-100 hover:scale-105  transition-all duration-300"
              >
                Author's Post
              </button> */}

              <p className="font-bold text-shadow-xl p-2 ">
                Views: <span className="font-semibold">{itm?.views}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
