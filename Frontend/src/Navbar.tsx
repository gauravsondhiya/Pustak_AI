import React, { useEffect, useState } from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "./components/ui/moving-border";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
  const checkToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setIsLoggedIn(true);
      setUserInfo(token.user_info || "User");
    } else {
      setIsLoggedIn(false);
      setUserInfo("");
    }
  };

  checkToken(); // run on mount

  // Listen for token changes (even if set in another tab or component)
  window.addEventListener("storage", checkToken);

  return () => window.removeEventListener("storage", checkToken);
}, []);


  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // ✅ immediately reflect logout in UI
    setUserInfo("");
  };

  return (
    <nav className="top-0 m-auto bg-white z-50 fixed border border-neutral-800 p-2 w-full flex justify-around">
      <NavLink to="/">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-3 text-2xl font-bold"
        >
          <LuBrainCircuit />
          पुस्तक AI
        </Button>
      </NavLink>

      {isLoggedIn ? (
        <div className="flex gap-5 items-center text-xl font-bold">
          <p>{userInfo}</p>
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
