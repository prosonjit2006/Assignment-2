import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
        const data = await res.json();

        // console.log("single blog:", data);

        setBlog(data);
      } catch (err: any) {
        setError(`Failed to fetch blog ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchBlog();
  }, [params]);

  return (
    <>
      {loading && (
        <p className="text-center text-red-500 text-xl">Loading...</p>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}
      {blog && (
        <div className="p-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>

          <p className="text-gray-700 mb-6">{blog?.body}</p>

          <div className="flex justify-between items-center">
            <p className="font-semibold">Views: {blog?.views}</p>
            <p className="text-sm text-gray-500">Post ID: {blog?.id}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
