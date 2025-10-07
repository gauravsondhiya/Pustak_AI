import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage/Intro'
import Footer from './Footer'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Chat from './chat/Chat'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (<>
   <Navbar/>
    <Routes>
      <Route path='/' element={ <Homepage/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/chat' element={ <Chat/>}/>
    </Routes>
   <Footer/>
    </>
  )
}

export default App