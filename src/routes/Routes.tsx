import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "../pages/ErrorBoundary";
import WeatherWrapper from "../layout/weatherapp/WeatherWrapper";
import WeatherApp from "../section/WeatherApp";
import ParrentWrapper from "../layout/ParrentWrapper";
import JokeWrapper from "../layout/jokeapp/JokeWrapper";
import JokeGenarator from "../section/JokeGenarator";
import BlogWrapper from "../layout/blogapp/BlogWrapper";
import Home from "../pages/blog/Home";
import BlogDetails from "../pages/blog/BlogDetails";
import Author from "../pages/blog/Author";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <ParrentWrapper />,
    children: [
      // weather warpper
      {
        //  index: true,
        path: "/",
        element: <WeatherWrapper />,
        children: [
          {
            index: true,
            // path: "/",
            element: <WeatherApp />,
          },
        ],
      },
      //   joke warpper
      {
        path: "/jokeapp",
        element: <JokeWrapper />,
        children: [{ index: true, element: <JokeGenarator /> }],
      },
      // blog wrapper
      {
        path: "/blogapp",
        element: <BlogWrapper />,
        children: [
          {
            // path: '/blogapp/home',
            index: true,
            element: <Home />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "blogdetails",
            element: <BlogDetails />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "author",
            element: <Author />,
            errorElement: <ErrorBoundary />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound />, errorElement: <ErrorBoundary /> },
]);

export default Routes;
