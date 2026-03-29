import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const ParrentWrapper = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ParrentWrapper;
