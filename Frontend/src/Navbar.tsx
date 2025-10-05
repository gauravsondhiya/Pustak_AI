import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "./components/ui/moving-border";
const Navbar = () => {
  return (
    <div className="m-0 top-0 m-auto fixed border border-neutral-800  p-2 w-full flex justify-around">
      <div className="">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-3 text-2xl font-bold"
        >
          <LuBrainCircuit />INkr 
        </Button>
       
      </div>
      <div className='flex gap-5 text-xl font-bold [&>button]:hover:text-blue-700 underline [&>button]:underline-offset-4'> 
           <button>Login </button>
           <button>Signup </button>
      </div>
    </div>
  );
};

export default Navbar;
