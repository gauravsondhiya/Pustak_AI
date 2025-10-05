import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
const Intro = () => {
  return (
    <div>
      <div className="relative flex   flex-col items-start justify-start">
        <BackgroundRippleEffect />
        <div className="mt-60 w-[90%] m-auto   border-red-500 text-center">
          <h1 className=" flex items-center justify-center gap-3 font-bold text-neutral-800 text-7xl  ">
            INkr <LuBrainCircuit />
          </h1>
          <h2 className="text-2xl mt-1">Your AI-Powered Notebook</h2>
          <p className="  text-neutral-800 text-4xl flex items-center gap-4 justify-center mt-4">
            From chaos to clarity – powered by INKr
          </p>
        </div>
        <div className="m-auto mt-5">
          <button className="border text-2xl font-bold p-4 rounded-2xl bg-black text-white">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
