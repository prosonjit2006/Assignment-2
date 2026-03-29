import { Outlet } from "react-router-dom";

const BlogWrapper = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BlogWrapper;
