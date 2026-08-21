import React, { useContext, useEffect, useState } from "react";
import { LuBrainCircuit, LuLogOut } from "react-icons/lu";
import { Button } from "./components/ui/moving-border";
import { NavLink, useNavigate, useLocation } from "react-router";
import UserContext from "./Context/User_Context";
import { FiAlignLeft } from "react-icons/fi";
import Slider from "./chat/Slider";
import Main_Chat from "./chat/Main_Chat";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { user, setUser } = useContext(UserContext);
   const { isOn, setIsOn } = useContext(UserContext);

  const [btn, setbtn] = useState(false);



  let on_off = () => {
    setTimeout(() => {
      setbtn(false);
    }, 1000);
    setbtn(!btn);
  };

  let logout = async () => {
    let response = await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    let logout_check = await response.json();
    if (logout_check.status == 200) {
      setUser(" ");
      navigate("/");
    }
    setUser(null);
    console.log("logout");
  };

  let side_btn = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <nav className="top-0 fixed border border-red-500 m-auto bg-white  p-2 w-full flex justify-around">
        {/* sider  */}

        {location.pathname == "/chat" && (
          <div className="sm:hidden border border-red-500">
            <button className="h-1 w-8" onClick={side_btn}>
              <FiAlignLeft />
            </button>
          </div>
        )}

        <NavLink to="/">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-3 text-2xl font-bold"
          >
            <LuBrainCircuit />
            पुस्तक AI
          </Button>
        </NavLink>

        {user ? (
          <div className="relative text-left mt-2">
            <button
              onClick={on_off}
              className=" font-bold rounded-full px-4 py-2 text-2xl text-white  bg-black transition  "
            >
              {user}
            </button>

            {btn && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li> */}
                  <li
                    onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
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

      {/* {false && (
        <div
          className="bg-green-500 h-[calc(100vh-4rem)]
      absolute sm:block
      left-0
      top-17
      w-[25%]
      h-[200px]"
        >
          <div className="border border-black">
            <div className="flex justify-between text-2xl mt-3 p-2 font-bold">
              <p> Upload Your Sources</p>
              <button onClick={side_btn}>❌</button>
            </div>
           <Slider/>
          </div>
        </div>
      )} */}

    
    </>
  );
};

export default Navbar;
