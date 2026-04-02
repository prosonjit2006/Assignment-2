import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "../pages/ErrorBoundary";
import WeatherWrapper from "../layout/weatherapp/WeatherWrapper";
import ParrentWrapper from "../layout/ParrentWrapper";
import JokeWrapper from "../layout/jokeapp/JokeWrapper";
import BlogWrapper from "../layout/blogapp/BlogWrapper";
const Home = lazy(() => import("../pages/blog/Home"));
// import Home from "../pages/blog/Home";
import BlogDetails from "../pages/blog/BlogDetails";
import Author from "../pages/blog/Author";
import WeatherApp from "../pages/WeatherApp";
import JokeGenarator from "../pages/JokeGenarator";
import AuthorDetails from "../pages/blog/AuthorDetails";
import AuthorWrapper from "../layout/AuthorWrapper";
// import FallBack from "../pages/FallBack";

// use lazy loading in the page

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
            // element: <Home />,
            element: (
              // <Suspense fallback={()=> (FallBack)}>
              <Suspense
                fallback={
                  <h2 className="text-center text-red-500 text-lg">
                    Loading...
                  </h2>
                }
              >
                <Home />
              </Suspense>
            ),
            // errorElement: <ErrorBoundary />,
          },
          {
            path: ":id",
            element: <BlogDetails />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "author",
            element: <AuthorWrapper />,
            errorElement: <ErrorBoundary />,
            children: [
              {
                // path: "author",
                index: true,
                element: <Author />,
                errorElement: <ErrorBoundary />,
              },
              {
                path: ":authorid",
                element: <AuthorDetails />,
                errorElement: <NotFound />,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound />, errorElement: <ErrorBoundary /> },
]);

export default Routes;
