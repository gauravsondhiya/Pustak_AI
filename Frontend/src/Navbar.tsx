import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "./components/ui/moving-border";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="top-0 m-auto bg-white z-50 fixed  border-neutral-800  p-2 w-full flex justify-around">
      <NavLink to="/">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-3 text-2xl font-bold"
        >
          <LuBrainCircuit />पुस्तक AI 
        </Button>
       
      </NavLink>
      <div className='flex gap-5 items-center text-xl font-bold [&>button]:hover:text-blue-700 underline [&>button]:underline-offset-4'> 
           <NavLink to="/login" >Login </NavLink>
           <NavLink to="/signup">Signup </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
