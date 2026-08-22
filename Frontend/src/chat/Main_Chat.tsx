import React, { useContext } from "react";
import Slider from "./Slider";
import Chat_box from "./Chat_box";
import UserContext from "../Context/User_Context";

const Main_Chat = () => {
  const { isOn, setIsOn } = useContext(UserContext);

  return (
    <div className="w-full  border-red-600 grid sm:grid-cols-12 mt-20 fixed ">
       <div className="md:hidden">
          {isOn && <Slider />}
       </div>
        <div className="hidden sm:block sm:col-span-3 ">
            <Slider />
        </div>

      <Chat_box />
    </div>
  );
};

export default Main_Chat;
