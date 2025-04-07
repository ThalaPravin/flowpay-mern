import React from "react"
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"


export default function App(){
  return(
    <>
     <BrowserRouter>
      <Routes>
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/login" element={<LogIn/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}