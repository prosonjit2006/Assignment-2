import { NavLink } from "react-router-dom";
import { topBarItems } from "../services/json/global.json";

const TopBar = () => {
  return (
    <div className=" absolute top-0 left-0 right-0 w-full py-4 px-10 bg-yellow-50 flex justify-between items-center">
      <div>
        <h1 className="font-bold font-serif text-xl">Logo</h1>
      </div>
      <div className="flex items-center ">
        {topBarItems.map((itm, index) => (
          <NavLink
            to={itm.path}
            key={index}
            className={({ isActive }) =>
              `mx-3 active:font-semibold transition-all active:duration-75 ${isActive ? "text-red-400 font-semibold" : "text-gray-700"}`
            }
          >
            {itm.name}
          </NavLink>
        ))}
      </div>
      <div>
        <button className="px-4 py-2 bg-blue-500 rounded-xl text-white">
          Button
        </button>
      </div>
    </div>
  );
};

export default TopBar;
