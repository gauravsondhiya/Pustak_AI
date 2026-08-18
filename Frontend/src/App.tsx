import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage/Intro";
import Footer from "./Footer";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Chat from "./chat/Chat_sources";
import { Routes, Route } from "react-router";
import ProtectedRoute from "./chat/ProtectedRoute";
import { LoaderOne } from "./components/ui/loader";
import axios from "axios";
function App() {
    
  let check_login = async ()=>{
    try {
       let response = await axios.get("http://localhost:3000/api/auth/login_check",{
      withCredentials: true
      })
      console.log(response.message)
    } catch (error) {
      console.log(error)
    }
   
    //  let data= await response.json()
    //  console.log(response.data.firstname)
  }
 useEffect(()=>{
   check_login()
 },[])
// if(true) return (
//   <div className="flex h-screen items-center justify-center">
  
// <LoaderOne/>
//   </div>
// ) 
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
