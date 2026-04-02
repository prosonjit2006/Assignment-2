import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { AuthorInterface } from "../../types/interface/global.interface";
import { MoveLeft } from "lucide-react";

const AuthorDetails = () => {
  const navigate = useNavigate();
  const { authorid } = useParams();
  //   console.log("params", authorid);

  const [author, setAuthor] = useState<AuthorInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   console.log("author data ", author);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${authorid}`)
      .then((response) => {
        // console.log('res', response);

        setAuthor(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [authorid]);
  return (
    <>
      {loading && (
        <p className="text-red-400 font-bold text-center">Loading...</p>
      )}

      {error && <p className="text-red-400 font-bold text-center">{error}</p>}

      {author && (
        <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-lg border bg-white">
          <button
            onClick={() => navigate("/blogapp/author")}
            className="flex items-center gap-1 px-2 py-1 group transition-all duration-300 hover:scale-105"
          >
            <MoveLeft
              size={14}
              className=" group-hover:-translate-x-[2px] transition-all duration-300"
            />
            Back
          </button>

          <div className="flex flex-col items-center">
            <img
              src={author?.image}
              alt="author"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />

            <h2 className="mt-4 text-xl font-bold">
              {author?.firstName} {author?.lastName}
            </h2>

            <p className="text-gray-500">{author?.email}</p>
          </div>

          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p>
              <strong>Age:</strong> {author?.age}
            </p>
            <p>
              <strong>Phone:</strong> {author?.phone}
            </p>
            <p>
              <strong>University:</strong> {author?.university}
            </p>

            <p>
              <strong>Company:</strong> {author?.company?.name} (
              {author?.company?.title})
            </p>

            <p>
              <strong>Location:</strong> {author?.address?.city},{" "}
              {author?.address?.state}, {author?.address?.country}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorDetails;
