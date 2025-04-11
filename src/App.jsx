import React from "react"
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"

export default function App(){
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/login" element={<LogIn/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}