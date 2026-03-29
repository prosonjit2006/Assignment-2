import { navBarItems } from "../../services/json/global.json";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className=" w-full py-4 px-10 bg-yellow-50 flex justify-between items-center">
      <div>
        <h1 className="font-bold font-serif text-xl">Blog Logo</h1>
      </div>
      <div className="flex items-center ">
        {navBarItems.map((itm) => (
          <NavLink
            to={itm.path}
            end={(itm.path === "/blogapp")}
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
        <button onClick={()=> navigate("/")} className="px-4 py-2 bg-blue-500 rounded-xl text-white">
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NavBar;
