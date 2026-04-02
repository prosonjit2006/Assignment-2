import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { BlogInterface } from "../../types/interface/global.interface";
import axios from "axios";
import { MoveLeft } from "lucide-react";

const BlogDetails = () => {
  const params = useParams();
  const navigate = useNavigate()

  const [blog, setBlog] = useState<BlogInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${params.id}`)
      .then((response) => {
        // console.log('res', response);
        setBlog(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    // const fetchBlog = async () => {
    //   setLoading(true);
    //   try {
    //     const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    //     const data = await res.json();

    //     // console.log("single blog:", data);

    //     setBlog(data);
    //   } catch (error: unknown) {
    //     if (error instanceof Error) {
    //       setError(error.message);
    //     } else {
    //       setError("Unknown error");
    //     }

    //     // setError(`Failed to fetch blog ${err.message}`);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // if (params.id) fetchBlog();
  }, [params]);

  return (
    <>
      {loading && (
        <p className="text-center text-red-500 text-xl">Loading...</p>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}
      {blog && (
        <div className="p-6 max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/blogapp")}
            className="flex items-center gap-1 px-2 py-1 group transition-all duration-300 hover:scale-105 mb-2"
          >
            <MoveLeft
              size={14}
              className=" group-hover:-translate-x-[2px] transition-all duration-300"
            />
            Back
          </button>
          <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>

          <p className="text-gray-700 ">{blog?.body}</p>

          <div className="flex justify-between items-center my-4">
            <p className="font-semibold">Views: {blog?.views}</p>
            <p className="font-semibold">Likes: {blog?.reactions?.likes}</p>
            <p className=" text-gray-800">
              Dislikes: {blog?.reactions?.dislikes}
            </p>
            <p className="text-sm text-gray-700">Post ID: {blog?.id}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold ">
              Tags:
              {blog?.tags?.map((itm, index) => (
                <span key={index} className="mx-3">
                  {itm}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
