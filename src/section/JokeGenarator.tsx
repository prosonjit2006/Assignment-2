// B) Random Joke Generator :-
// API: https://official-joke-api.appspot.com/random_joke
// Scope:
// - Fetch random data on mount.
// - Add a button to re-fetch (new joke on demand).
// - Manage loading & error states.

import { useEffect, useState } from "react";
import type { JokeType } from "../types/type/global.type";

const JokeGenarator = () => {
  // const [btnClick, setBtnClick] = useState("Click on the btn to get a joke");
  const [joke, setJoke] = useState<JokeType>({
    setup: "Click the generate button to get a setup joke-content",
    punchline: "And the punchline will appear here",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const newJoke = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );

      // console.log("res", response);
      const data = await response.json();
      console.log("jsonData", data);

      // setBtnClick("");
      setJoke(data);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    newJoke();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center justify-between gap-4 border border-gray-300 shadow-xl rounded-xl p-7 pt-10 min-w-[450px] min-h-[180px]">
        {error && <p className="text-red-500 text-center text-xl">{error}</p>}

        {/* <p className="text-2xl text-gray-600">{btnClick}</p> */}

        {/* {loading && (
          <p className="text-xl text-red-500 text-center">Loading...</p>
        )}

        {joke && (
          <div className=" text-start">
            <h1 className="text-xl font-bold">
              Setup: <span className="font-semibold">{joke?.setup}</span>
            </h1>
            <p className="font-bold text-lg">
              PunchLine:{" "}
              <span className="font-semibold">{joke?.punchline}</span>
            </p>
          </div>
        )} */}

        {loading ? (
          <p className="text-xl text-red-500 text-center">Loading...</p>
        ) : (
          <div className=" text-start">
            <h1 className="text-xl font-bold">
              Setup: <span className="font-semibold">{joke?.setup}</span>
            </h1>
            <p className="font-bold text-lg">
              PunchLine:{" "}
              <span className="font-semibold">{joke?.punchline}</span>
            </p>
          </div>
        )}

        <button
          onClick={newJoke}
          className=" px-4 py-2 text-gray-50 bg-blue-600 rounded-xl mt-5 hover:bg-blue-700 transition duration-300 active:duration-75 active:scale-110"
        >
          New Joke
        </button>
      </div>
    </div>
  );
};

export default JokeGenarator;
