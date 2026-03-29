import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const BlogWrapper = () => {
  return (
    <>
    <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BlogWrapper;
