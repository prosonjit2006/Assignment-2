import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import type { AuthorInterface } from "../../types/interface/global.interface";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Author = () => {
  // const params = useParams();

  const navigate = useNavigate();

  const [author, setAuthor] = useState<AuthorInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users`, {
        params: {
          order: order,
        },
      })
      .then((response) => {
        // console.log('res', response);

        setAuthor(response.data.users);
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

  // console.log("data", author);

  return (
    <div className="h-[90vh] w-full p-5">
      <div className="flex justify-between items-center px-16">
        <h2 className=" font-bold text-2xl text-center">Authors</h2>

        {/* order shorting  */}
        <div>
          <label htmlFor="select">
            Order:{" "}
            <select
              name="order"
              id="order"
              value={order}
              onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
              className="border border-gray-300 rounded-md px-2 py-1 text-gray-600 "
            >
              <option value="asc">Asending</option>
              <option value="desc">Desending</option>
            </select>
          </label>
        </div>
      </div>

      <div className=" mt-2 p-5 flex flex-wrap gap-5 justify-center">
        {loading && (
          <p className="text-center text-red-500 text-xl mt-5">Loading...</p>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {author?.map((item) => (
          <div
            key={item?.id}
            className=" border border-gray-300 p-5  rounded-md w-[330px] flex flex-wrap flex-col items-start justify-between shadow-xl group hover:scale-105 hover:translate-y-1 transition-all duration-300 "
          >
            <h2 className="text-md font-bold mb-1">
              {" "}
              {item?.firstName} <span>{item?.lastName}</span>
            </h2>
            <p className="flex items-center gap-1">
              <Mail size={15} />
              {item?.email}
            </p>
            <p className="flex items-center gap-1">
              <Phone size={15} />
              {item?.phone}
            </p>
            <p className="flex items-center gap-1">
              <MapPinHouse size={15} />
              {item?.address?.country}
            </p>

            <button
              onClick={() => navigate(`/blogapp/author/${item.id}`)}
              className="w-full px-3 py-1 mt-2 rounded-md bg-gradient-to-bl from-blue-300 to-blue-700 text-white  group-hover:from-blue-700 group-hover:to-blue-300 transition-all ease-in-out duration-700 active:scale-105"
            >
              View Profile
            </button>

            {/* <div>
              <h3 className=" font-bold text-xl mb-2">
                Title: <span className="font-normal">{item?.title}</span>
              </h3>
              <p className=" font-bold">
                Body: <span className="font-normal">{item?.body}</span>
              </p>

              <button
                onClick={() => navigate(`/blogapp/author/${item.id}`)}
                className="px-3 pt-2 rounded-md bg-blue-500"
              >
                View Profile
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
