import React from "react"
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp"


export default function App(){
  return(
    <>
     <BrowserRouter>
      <Routes>
         <Route path="/signup" element={<SignUp/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}