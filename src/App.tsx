// import WeatherApp from "./section/WeatherApp";
import { RouterProvider } from "react-router-dom";
// import JokeGenarator from "./section/JokeGenarator";
import Routes from "./routes/Routes";
// import BlogApp from "./components/BlogApp";

const App = () => {
  return (
    <>

    <RouterProvider router={Routes} />
      {/* <WeatherApp /> */}
      {/* <JokeGenarator /> */}
      {/* <BlogApp /> */}
    </>
  );
};

export default App;
