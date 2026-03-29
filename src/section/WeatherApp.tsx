// -
// -
// my API -  745505447eb0971a4c8993ef1fd6e91d
/*
A) Weather App :-
API: https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
Scope:
- Learn how to fetch dynamic API data using a query parameter (city name).
- Practice loading state & error handling (Loading..., City not found).
- Render dynamic UI (temperature, condition, icon).
Practice: Understand conditional rendering in React.
*/

import { useState } from "react";

const API_KEY = "745505447eb0971a4c8993ef1fd6e91d";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");


// fetch data using axios 

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      );

      console.log("res", response);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (error: any) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className=" text-2xl my-2 font-bold font-serif">Weather App</h1>

      {/* form - not used form */}
      {/* <form> */}
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City Name"
        className="border border-black rounded p-2"
      />
      <button
        onClick={getWeather}
        className="mt-4 mb-2 p-3 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-800 hover:scale-105 transition-all duration-300"
      >
        Get Weather
      </button>
      {/* </form> */}

      {/* data updata on the ui */}
      <div className="mt-5 gap-2">
        {/* loading state  */}
        {loading && (
          <p className="text-xl text-red-500 text-center">Loading...</p>
        )}

        {/* error state */}
        {error && (
          <p className="text-red-500 text-xl text-center pb-2">{error}</p>
        )}

        {/* ui of the weather data */}
        {weather && (
          <div className=" border border-gray-400 p-6 rounded-xl shadow-lg flex flex-row gap-5">
            {/* row 1 */}
            <div className="gap-2">
              <h2 className=" capitalize font-bold">
                City Name:{" "}
                <span className=" font-semibold">{weather?.name}</span>
              </h2>
              <h3 className="font-bold">
                Country:{" "}
                <span className="font-semibold">{weather?.sys?.country}</span>
              </h3>
              <p className="font-bold">
                Tempratutre:{" "}
                <span className="font-semibold">
                  {(weather?.main?.temp - 273.15).toFixed(2)} <sup>0</sup>C
                </span>
              </p>
              <p className="font-bold">
                Feels Temp:{" "}
                <span className="font-semibold">
                  {(weather?.main?.feels_like - 273.15).toFixed(2)} <sup>0</sup>
                  C
                </span>
              </p>
              <p className="font-bold">
                Humidity:{" "}
                <span className="font-semibold">
                  {weather?.main?.humidity} %
                </span>
              </p>
              <p className=" capitalize text-red-500">
                {weather?.weather[0]?.description}
              </p>
            </div>
            {/* row 2 */}
            <div className="flex items-center justify-center">
              <figure className="px-2 py-2 bg-gray-400 rounded-full">
                <img
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                  alt="weather-icon"
                />
              </figure>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
