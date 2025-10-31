import React, { useContext, useEffect, useState } from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "./components/ui/moving-border";
import { NavLink } from "react-router";
import UserContext from "./Context/User_Context";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userInfo, setUserInfo] = useState("");

  const { user,setUser } = useContext(UserContext);


  let logout = () => {
  setUser({ status: false, username: "" });
  localStorage.removeItem("user");
};

  return (
    <nav className="top-0 m-auto bg-white z-50 fixed  border-neutral-800 p-2 w-full flex justify-around">
      <NavLink to="/">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-3 text-2xl font-bold"
        >
          <LuBrainCircuit />
          पुस्तक AI
        </Button>
      </NavLink>

      {user.status ? (
        <div className="flex gap-5 items-center text-xl font-bold">
          <p>{user.username}</p>
          <button onClick={logout} className="hover:text-gray-400">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5 items-center text-xl font-bold">
          <NavLink className="hover:text-gray-400" to="/login">
            Login
          </NavLink>
          <NavLink className="hover:text-gray-400" to="/signup">
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
