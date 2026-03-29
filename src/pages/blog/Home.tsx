import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [blog, setblog] = useState<null>(null);

  useEffect(() => {
    const handelBlog = async () => {
      setLoading(true);

      // if(!blog) return;

      try {
        const response = await fetch("https://dummyjson.com/posts");

        // console.log("res", response);

        const data = await response.json();

        console.log("jsonData", data.posts);

        setblog(data.posts);
      } catch (error) {
        // console.log("err", error.massage);
        setError(error?.massage)
      } finally {
        setLoading(false);
      }
    };

    handelBlog();
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
            className=" border border-gray-600 p-5  rounded-md w-[460px] flex flex-col items-start justify-between "
          >
            <div>
              <h3 className=" font-bold text-xl mb-2">
                Title: <span className="font-normal">{itm?.title}</span>
              </h3>
              <p className=" font-bold">
                Body: <span className="font-normal">{itm?.body}</span>
              </p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <button
                onClick={() => {}}
                className="mt-3 px-3 py-2 bg-blue-400 rounded-md hover:bg-blue-500 hover:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                View Details
              </button>

              <p>
                Views: <span>{itm.views}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
