import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import type { AuthorInterface } from "../../types/interface/global.interface";

const Author = () => {
  // const params = useParams();

  const [blog, setBlog] = useState<AuthorInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          order: order,
        },
      })
      .then((response) => {
        // console.log('res', response);

        setBlog(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    // const fetchBlog = async () => {
    //   setLoading(true);
    //   try {

    //     // use axios
    //     const res = await fetch(
    //       `https://jsonplaceholder.typicode.com/posts/${params.authorId}`,
    //     );
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

    // if (params.authorId) fetchBlog();
  }, [order]);

  // client site data shorting
  const sortedBlog = blog
    ? [...blog].sort((a, b) => (order === "asc" ? b.id - a.id : a.id - b.id))
    : null;

  return (
    <div className="h-[90vh] w-full p-5">
      <div className="flex justify-between items-center px-16">
        <h2 className=" font-bold text-2xl text-center">Author's Posts</h2>

        <div>
          <label htmlFor="select">
            Order:{" "}
            <select
              name="order"
              id="order"
              value={order}
              onChange={(e) => setOrder(e.target.value as "asc" || "desc")}
              className="border border-gray-300 rounded-md px-2 py-1 text-gray-600 "
            >
              <option value="asc">Asending</option>
              <option value="desc">Desending</option>
            </select>
          </label>
        </div>
      </div>
      <div className=" mt-2 p-5 flex flex-wrap gap-4 justify-center">
        {loading && (
          <p className="text-center text-red-500 text-xl mt-5">Loading...</p>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {sortedBlog?.map((itm) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
