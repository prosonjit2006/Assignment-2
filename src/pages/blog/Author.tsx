import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { BlogInterface } from "../../types/interface/global.interface";
import axios from "axios";

const Author = () => {
  const params = useParams();

  const [blog, setBlog] = useState<BlogInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.authorId}`)
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
  }, [params]);

  return (
    <>
      {loading && (
        <p className="text-center text-red-500 text-xl mt-5">Loading...</p>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}
      {blog && (
        <div className="p-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>

          <p className="text-gray-700 mb-6">{blog?.body}</p>
        </div>
      )}
    </>
  );
};

export default Author;
