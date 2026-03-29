import { Outlet } from "react-router-dom";

const JokeWrapper = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default JokeWrapper;
