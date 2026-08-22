import React, { useState } from "react";
import UserContext from "./User_Context";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOn, setIsOn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isOn, setIsOn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
