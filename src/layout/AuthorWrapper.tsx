import { Outlet } from "react-router-dom";

const AuthorWrapper = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthorWrapper