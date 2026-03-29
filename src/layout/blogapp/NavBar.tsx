import { navBarItems } from "../../services/json/global.json";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  
  return (
    <div className=" absolute top-0 left-0 right-0 w-full py-4 px-10 bg-yellow-50 flex justify-between items-center">
      <div>
        <h1 className="font-bold font-serif text-xl">Blog Logo</h1>
      </div>
      <div className="flex items-center ">
        {navBarItems.map((itm) => (
          <NavLink
            to={itm.path}
            key={itm.path}
            className={({ isActive }) =>
              `mx-3 hover:text-blue-400 font-medium transition-all duration-300 ${isActive ? "text-red-400 font-bold" : "text-gray-700"}`
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

export default NavBar;
